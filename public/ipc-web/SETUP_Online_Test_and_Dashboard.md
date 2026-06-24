# IPC Online Test + Results Dashboard — Setup Guide

You have three pieces:

1. **IPC_Online_Test.html** — the participant test (host it → e.g. `https://fieldhealth.…/ipc-test`)
2. **IPC_Results_Dashboard.html** — your results/analysis screen (host it → e.g. `https://fieldhealth.…/ipc-results`)
3. **A Google Apps Script Web App** — the free, no-server "middle" that stores every submission in a Google Sheet and serves it back to the dashboard.

```
 Participants → [Test link] ──POST──┐
                                    ▼
                         Google Sheet (Apps Script Web App)
                                    ▲
 You (facilitator) → [Dashboard] ──GET──┘
```

---

## Step 1 — Create the Google Sheet + Web App (≈3 min)

1. Go to **sheets.google.com** → create a blank sheet, name it `IPC Test Results`.
2. Menu **Extensions → Apps Script**. Delete whatever is there and paste the code below.
3. Click **Save**, then **Deploy → New deployment**.
4. Gear icon → **Web app**. Set:
   - **Execute as:** Me
   - **Who has access:** **Anyone**
5. Click **Deploy**, authorise when prompted, and **copy the Web app URL** (ends in `/exec`).

```javascript
// ===== IPC Test results — Google Apps Script Web App =====
const SHEET_NAME = 'Results';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = getSheet_();
    const d = JSON.parse(e.postData.contents);
    sh.appendRow([
      new Date(), d.code || '', d.role || '', d.phase || '',
      d.score, d.total || 15, d.pct || '',
      (d.answers || []).join(''), d.ts || ''
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  const sh = getSheet_();
  const rows = sh.getDataRange().getValues();
  rows.shift(); // drop header
  const out = rows.map(function (r) {
    return {
      ts: r[0], code: r[1], role: r[2], phase: r[3],
      score: Number(r[4]), total: Number(r[5]) || 15, pct: Number(r[6]),
      answers: String(r[7] || '').split('')
    };
  });
  return json_(out);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Timestamp','Code','Role','Phase','Score','Total','Percent','Answers','ClientTime']);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

> If you later change the script, use **Deploy → Manage deployments → Edit → New version** so the same URL keeps working.

---

## Step 2 — Point the TEST at your Web App

1. Open **IPC_Online_Test.html** in a text editor.
2. Find this line (near the bottom, in the `<script>`):
   ```javascript
   const RESULTS_ENDPOINT = '';
   ```
3. Paste your Web app URL between the quotes:
   ```javascript
   const RESULTS_ENDPOINT = 'https://script.google.com/macros/s/AKfy…/exec';
   ```
4. Save. Upload the file to your website.

That's it — every submission now lands in your Google Sheet automatically (and still scores instantly for the participant).

---

## Step 3 — Point the DASHBOARD at the same Web App

1. Host **IPC_Results_Dashboard.html** on your site.
2. Open it, click **"Data source…"**, paste the **same** Web app URL, click **Save & load**.
   (The URL is remembered in your browser, so you only do this once on your machine.)
3. Click **↻ Refresh data** any time to pull the latest submissions, then present.

The dashboard shows: participant count, pre vs post averages, average gain, % competent (≥11/15), correct-rate per question (pre vs post), and a per-participant table — plus **Export CSV**.

---

## How participants use it
- Open the test link on a phone or laptop.
- Enter a **code** (e.g. `MC-01`) — the same code for pre and post so their gain can be matched — pick **Pre-test** or **Post-test**, answer, submit.
- They see their score and correct answers immediately.

## Tips
- Give each participant a fixed code card (MC-01 … MC-10) so pre/post pairs match cleanly.
- No endpoint set? The test still works and scores; results save on the device and can be copied — but they won't gather centrally. The endpoint is what makes the dashboard live.
- Privacy: only codes (not names) are stored, matching your paper-test approach.
