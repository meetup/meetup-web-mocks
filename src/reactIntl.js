export const intl = {
	formatMessage: (trn) => trn.defaultMessage || 'formatted message',
	formatDate: (date) => date || 'formatted date',
	formatTime: (time) => time || 'formatted time',
	formatRelative: (time) => time || 'formatted relative time',
	formatNumber: (num) => num || 'formatted number',
	formatPlural: (str) => str || 'formatted plural string',
	formatHTMLMessage: (trn) => trn.defaultMessage || 'formatted message',
	now: (date) => 'current time',
};
