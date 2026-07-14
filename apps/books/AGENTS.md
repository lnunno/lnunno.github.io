# Project Instructions for Codex

## Local Windows Test-Running Policy

When working on this project on Windows, be conservative with heavy test commands to avoid OS-level OOM or Windows commit exhaustion.

### General Rules

- Do not repeatedly run the full Playwright E2E suite while iterating.
- Prefer targeted tests for the file or behavior being changed.
- Use low concurrency for browser-based tests.
- Do not leave Vite, Jest watch, Playwright, Chromium, Chrome, Edge, or extra Node processes running after test attempts.
- If a command fails, inspect the failure before rerunning instead of blindly retrying.
- Avoid starting multiple dev servers if one is already running.
- Avoid running Playwright, Jest, Vite, typecheck, and lint all at once unless explicitly requested.
- Prefer one verification command at a time.

### Preferred Playwright Commands

Use this by default for E2E debugging:

```bash
npx playwright test --workers=1
```

For a specific spec:

```bash
npx playwright test path/to/test.spec.ts --workers=1
```

For a specific test title:

```bash
npx playwright test -g "test title" --workers=1
```

Only run the full Playwright suite when explicitly asked or when the change is ready for final verification.

### Preferred Jest Commands

Prefer targeted Jest tests:

```bash
npx jest path/to/test
```

For lower memory usage:

```bash
npx jest --maxWorkers=50%
```

If memory pressure persists:

```bash
npx jest --runInBand
```

### Before Rerunning E2E Tests

Check for existing processes:

```powershell
Get-Process node, chrome, chromium, msedge -ErrorAction SilentlyContinue |
  Select-Object Name,Id,CPU,WorkingSet64,VirtualMemorySize64
```

If there are obvious leftover test, browser, or dev-server processes and it is safe to stop them, clean them up before rerunning:

```powershell
taskkill /F /IM node.exe
taskkill /F /IM chrome.exe
taskkill /F /IM chromium.exe
taskkill /F /IM msedge.exe
```

Be careful: this can kill unrelated development servers, browser sessions, or Node processes.

### Memory Debugging Checklist

When low-memory symptoms appear, check:

```text
Task Manager -> Performance -> Memory -> Committed: X / Y GB
```

If `X` is close to `Y`, stop running tests and investigate commit pressure.

Use:

```powershell
Get-Process | Sort-Object -Descending VirtualMemorySize64 |
  Select-Object -First 30 Name,Id,
    @{Name="VM_GB";Expression={[math]::Round($_.VirtualMemorySize64/1GB,2)}},
    @{Name="WS_GB";Expression={[math]::Round($_.WorkingSet64/1GB,2)}},
    @{Name="PM_GB";Expression={[math]::Round($_.PagedMemorySize64/1GB,2)}}
```

Also check Event Viewer under `Windows Logs -> System` for `Resource-Exhaustion-Detector` or `Application popup` events, especially low virtual memory diagnostics.

### Cleanup Expectations

After running Playwright or launching browsers manually, ensure tests and helpers clean up:

```ts
await page.close();
await context.close();
await browser.close();
```

Use Playwright fixtures where possible so browser resources are automatically cleaned up.

### Escalation Rule

If Windows memory pressure grows across repeated test runs:

1. Stop rerunning tests.
2. Inspect process memory.
3. Kill only clearly leftover test, browser, or dev-server processes.
4. Restart Vite, Jest, and watch processes before rebooting.
5. Report which process appears to be growing.
6. Do not continue running the full E2E suite repeatedly.

### Final Verification Rule

Before final verification, prefer this order:

1. Run the smallest relevant unit test.
2. Run the smallest relevant integration test.
3. Run one targeted Playwright spec with `--workers=1`.
4. Only then consider the full E2E suite.

The goal is to avoid making Windows OOM worse while still giving useful verification.
