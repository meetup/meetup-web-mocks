import {
	MOCK_GROUP,
	MOCK_EVENT,
	MOCK_SHALLOW_GROUP,
	MOCK_SHALLOW_EVENT,
} from './api';
import { MOCK_COMM_APP_STATE } from './group/communication/app';

const api = {
	self: {
		type: 'member',
		value: {
			id: 1234,
			status: 'prereg',
		},
	},
	group: {
		type: 'group',
		value: MOCK_GROUP,
	},
	events: {
		type: 'event',
		value: [
			{ ...MOCK_EVENT, ...{ id: '3456' } },
			{ ...MOCK_EVENT, ...{ id: '4567' } },
		],
	},
	event: {
		type: 'event',
		value: MOCK_EVENT,
	},
	[`event_${MOCK_SHALLOW_GROUP.urlname}_${MOCK_SHALLOW_EVENT.id}`]: {
		type: 'event',
		value: MOCK_SHALLOW_EVENT,
	},

	...MOCK_COMM_APP_STATE,
};

export const MOCK_APP_STATE = {
	app: api,
	api,
	config: {
		apiUrl: 'http://fake.api.meetup.com',
		csrf: '1234_fake_csrf',
		requestLanguage: 'en-US',
		baseUrl: 'https://beta2.dev.meetup.com:8000',
	},
	routing: {
		locationBeforeTransitions: {
			pathname: '/foo',
		},
	},
	toasts: { ready: [] },
};

export const MOCK_API_PROBLEM = {
	problem: 'There was an internal problem in the API',
};

export const MOCK_API_RESULT = [
	{
		ref: 'group',
		type: 'group',
		value: MOCK_APP_STATE.app.group.value,
	},
];

export const MOCK_FETCH_API_RESPONSE = {
	queries: [],
	responses: [],
};

export const MOCK_OAUTH_COOKIES = {
	oauth_token: '1234',
	refresh_token: 'asdf',
	anonymous: true,
};

export const MOCK_RENDERPROPS = {
	location: {
		// https://github.com/reactjs/history/blob/master/docs/Location.md
		pathname: '/foo',
		search: '?foo',
		state: {},
		action: 'PUSH',
		key: '1234',
		query: {
			foo: null,
		},
	},
	params: {
		urlname: 'foo',
	},
};

export const MOCK_RENDERPROPS_UTF8 = {
	location: {
		// https://github.com/reactjs/history/blob/master/docs/Location.md
		pathname: '/バ-京',
		search: '',
		state: {},
		action: 'PUSH',
		key: '1234',
	},
	params: {
		urlname: 'バ-京',
	},
};

export const MOCK_MEANINGLESS_ACTION = {
	type: 'ARBITRARY',
	payload: '/',
};

export const mockQuery = ({ location, params, apiMetaHeaders }) => {
	const meta = {};
	if (apiMetaHeaders) {
		meta.apiMetaHeaders = apiMetaHeaders;
	}
	return {
		type: 'group',
		endpoint: (params || {}).urlname || 'foo',
		params: params,
		meta,
		ref: 'group',
	};
};

export const mockQueryBadType = ({ location, params }) => {
	const type = 'lkajlhsdhljaskliub';
	return { ...mockQuery({ location, params }), type };
};

export const MOCK_AUTH_HEADER = `Bearer ${MOCK_OAUTH_COOKIES}.oauth_token`;
export const MOCK_DATETIME = new Date().getTime();
export const MOCK_CREDENTIALS = {
	username: 'Michael McGahan',
	pw: 'whatever',
};

export const MOCK_LOGIN_RESPONSE = {
	value: {
		member: {},
		oauth_token: 1234,
	},
};

export const MOCK_POST_ACTION = {
	type: 'POST_DUMMY',
	payload: {
		query: {
			endpoint: 'mypost',
			ref: 'postiepost',
			type: 'mcposterson',
		},
		onSuccess: payload => ({ type: 'MOCK_SUCCESS', payload }),
		onError: err => ({ type: 'MOCK_ERROR', payload: err, error: true }),
	},
};

export const MOCK_DELETE_ACTION = {
	type: 'DELETE_DUMMY',
	payload: {
		query: {
			endpoint: 'mydelete',
			ref: 'deleted',
			type: 'dellllleeeeted',
		},
		onSuccess: payload => ({ type: 'MOCK_SUCCESS', payload }),
		onError: err => ({ type: 'MOCK_ERROR', payload: err, error: true }),
	},
};

// Arbitrary string response payload from server render
export const MOCK_RENDER_RESULT =
	'<html><body><h1>Hello world</h1></body></html>';

// string 'Cookie:' header from MOCK_OAUTH_COOKIES
export const MOCK_COOKIE_HEADER = Object.keys(MOCK_OAUTH_COOKIES).reduce(
	(acc, key) => (acc += `${key}=${JSON.stringify(MOCK_OAUTH_COOKIES[key])}; `),
	''
);

export const MOCK_REQUEST_COOKIES = {
	url: '/',
	headers: {
		cookie: MOCK_COOKIE_HEADER,
	},
};

const mock_valid_config = {
	DEV_SERVER_PORT: 8000,
	API_PROTOCOL: 'https',
	API_HOST: 'api.dev.meetup.com',
	OAUTH_AUTH_URL: 'https://secure.dev.meetup.com/oauth2/authorize',
	OAUTH_ACCESS_URL: 'https://secure.dev.meetup.com/oauth2/access',
	PHOTO_SCALER_SALT: 'abcdefg',
	AUTH_ENDPOINT: '/auth',
	oauth: {
		secret: process.env.MUPWEB_OAUTH_SECRET,
		key: process.env.MUPWEB_OAUTH_KEY,
	},
};
mock_valid_config.API_SERVER_ROOT_URL = `${mock_valid_config.API_PROTOCOL}://${
	mock_valid_config.API_HOST
}`;
export const MOCK_VALID_CONFIG = mock_valid_config;

export const MOCK_ROUTES = [
	{
		path: '/noQuery',
		component: () => {},
	},
	{
		path: '/',
		component: () => {},
		query: () => mockQuery({}),
		childRoutes: [
			{
				path: 'foo',
				component: () => {},
				query: () => mockQuery({}),
			},
			{
				path: 'nullQuery',
				component: () => {},
				query: () => null,
			},
		],
	},
];

// default value object used in mock state object
export const mockValue = { id: '🦄' };
/**
 * Useful function when generating fake state objects
 * @param {String} ref Reference to use in object creation
 * @param {Object} value value to use in object creation
 * @return {Object} mock object
 */
export const generateMockState = (ref, value = mockValue) => ({
	config: {},
	api: {
		...MOCK_APP_STATE.api,
		[ref]: {
			ref,
			value,
			meta: {
				statusCode: 204,
				flags: { some_flag: true },
			},
		},
	},
});

/**
 * Useful function when generating fake state objects with a custom meta object.
 * @param {String} ref Reference to use in object creation
 * @param {Object} value value to use in object creation
 * @param {Object} meta meta values to use in object creation
 * @return {Object} mock object
 */
export const generateMockStateAndMeta = (ref, value = mockValue, meta) => ({
	config: {},
	api: {
		...MOCK_APP_STATE.api,
		[ref]: {
			ref,
			value,
			meta,
		},
	},
});

/**
 * Useful testing util when testing selectors to determine if variants
 * object will be returned for the specified ref
 * @param {String} ref Reference to use in object creation
 * @param {Object} variants
 * @param {Object} value additional api value on the response
 * @return {Object} mock object
 */
export const generateMockVariantMeta = (ref, variants, value) => {
	const mockState = generateMockState();
	return {
		api: {
			...mockState.api,
			[ref]: {
				value,
				meta: { variants },
			},
		},
	};
};
