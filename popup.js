const DEFAULT_SETTINGS = {
  enabled: true,
  translateTextNodes: true,
  translateAttributes: true,
  conservativeMode: true,
  collectUntranslated: false,
  debugLog: false
};

function formatCandidates(candidates) {
  return Object.entries(candidates || {})
    .sort((a, b) => (b[1].count || 0) - (a[1].count || 0) || a[0].localeCompare(b[0]))
    .map(([text, item]) => `${text}\t${item.count || 0}`)
    .join('\n');
}

async function updateCandidateCount() {
  const { untranslatedCandidates = {} } = await chrome.storage.local.get({ untranslatedCandidates: {} });
  document.getElementById('candidate-count').textContent = String(Object.keys(untranslatedCandidates).length);
}

function setStatus(text) {
  const status = document.getElementById('status');
  status.textContent = text;
  setTimeout(() => {
    if (status.textContent === text) status.textContent = '';
  }, 1800);
}

async function init() {
  const settings = await chrome.storage.local.get(DEFAULT_SETTINGS);

  document.querySelectorAll('input[data-key]').forEach((input) => {
    const key = input.dataset.key;
    input.checked = Boolean(settings[key]);
    input.addEventListener('change', () => {
      chrome.storage.local.set({ [key]: input.checked });
    });
  });

  document.getElementById('copy-candidates').addEventListener('click', async () => {
    const { untranslatedCandidates = {} } = await chrome.storage.local.get({ untranslatedCandidates: {} });
    const text = formatCandidates(untranslatedCandidates);
    await navigator.clipboard.writeText(text);
    setStatus(text ? '已复制候选列表' : '没有候选可复制');
  });

  document.getElementById('clear-candidates').addEventListener('click', async () => {
    await chrome.storage.local.set({ untranslatedCandidates: {} });
    await updateCandidateCount();
    setStatus('候选已清空');
  });

  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === 'local' && changes.untranslatedCandidates) updateCandidateCount();
  });

  await updateCandidateCount();
}

init();
