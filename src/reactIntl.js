export const intl = {
	formatMessage: jest.fn(trn => trn.defaultMessage || 'formatted message'),
	formatDate: jest.fn(date => date.toString() || 'formatted date'),
	formatTime: jest.fn(time => time.toString() || 'formatted time'),
	formatRelative: jest.fn(date => date.toString() || 'formatted relative time'),
	formatNumber: jest.fn(num => String(num) || 'formatted number'),
	formatPlural: jest.fn(str => str || 'formatted plural string'),
	formatHTMLMessage: jest.fn(trn => trn.defaultMessage || 'formatted HTML message'),
	now: jest.fn(date => 12356789),
};
