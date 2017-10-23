export const MOCK_MEMBER = {
	name: 'mocky mcmockerson',
	id: 1243,
	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
};

export const MOCK_SELF = { ...MOCK_MEMBER, ...{ lang: 'en_US' } };
export const MOCK_SELF_FR = { ...MOCK_MEMBER, ...{ lang: 'fr_FR' } };

export const MOCK_DUOTONES = [['a', 'b']];
export const MOCK_DUOTONE_URLS = {
	dtaxb: {
		small: 'http://a.b',
		large: 'http://a.b',
	},
};

export const MOCK_GROUP = {
	id: 1234,
	urlname: 'fake-hq-faff',
	organizer: {
		id: 164510652,
		name: 'Grayson Cheese',
		bio:
			'Org bio lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tellus sit amet erat blandit volutpat.',
		photo: {
			id: 257204155,
			highres_link:
				'http://photos1.dev.meetupstatic.com/photos/member/a/c/7/b/highres_257204155.jpeg',
			photo_link:
				'http://photos1.dev.meetupstatic.com/photos/member/a/c/7/b/member_257204155.jpeg',
			thumb_link:
				'http://photos1.dev.meetupstatic.com/photos/member/a/c/7/b/thumb_257204155.jpeg',
			type: 'member',
			base_url: 'http://photos1.dev.meetupstatic.com',
		},
	},
	plain_text_description:
		'Plain text description lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tellus sit amet erat blandit volutpat. Suspendisse tincidunt pulvinar vehicula. Mauris eget tristique mi. Ut tincidunt, ante eget aliquet eleifend, ligula lorem elementum felis, quis consectetur sapien justo ut eros. Maecenas tempus lacus metus, eu pretium massa convallis vitae. Donec id fringilla orci. Nunc eget elementum massa. Pellentesque pulvinar ipsum porta finibus laoreet. Donec pharetra quis nunc in auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Nulla eget nibh quis nisi commodo accumsan. Donec sed suscipit justo. Aliquam erat volutpat. Nunc a nulla massa. Curabitur at elit eu neque congue fermentum',
	key_photo: {
		id: 1234,
		photo_link: 'http://placekitten.com/400/300',
		thumb_link: 'http://placekitten.com/400/300',
	},
	group_photo: {
		id: 1234,
		photo_link: 'http://placekitten.com/400/300',
		thumb_link: 'http://placekitten.com/400/300',
	},
	name: 'fake HQ FAFF',
	link: 'http://example.com/fake-hq-faff',
	who: 'Faffers',
	members: 999,
	photo_gradient: {
		light_color: MOCK_DUOTONES[0][1],
		dark_color: MOCK_DUOTONES[0][0],
	},
	duotoneUrl: MOCK_DUOTONE_URLS.dtaxb,
	event_sample: [
		{
			id: 1234,
			name: 'Sample event',
			time: new Date().getTime(),
			yes_rsvp_count: 50,
		},
	],
};

export const MOCK_CHAPTER_MEMBER = {
	id: 82159492,
	name: 'Grayson Cheese',
	status: 'active',
	joined: 1361806241000,
	city: 'new york',
	country: 'us',
	lat: 40,
	lon: -72,

	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
	group_profile: {
		status: 'active',
		visited: 1396285003000,
		created: 1395768492000,
		updated: 1478880527000,
		group: MOCK_GROUP,
		intro: 'cheese is the best!',
	},
};
export const MOCK_CHAPTER_MEMBER_2 = {
	id: 234322,
	name: 'Chesterton Gordidason',
	status: 'active',
	joined: 1361806241020,
	city: 'new york',
	country: 'us',
	lat: 40,
	lon: -72,

	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
	group_profile: {
		status: 'active',
		visited: 1396285003000,
		created: 1395768492000,
		updated: 1478880527000,
		group: MOCK_GROUP,
		intro: 'cheese is the best!',
	},
};
export const MOCK_CHAPTER_MEMBER_3 = {
	id: 23222,
	name: 'Simon Cheddar',
	status: 'active',
	joined: 1361806541020,
	city: 'new york',
	country: 'us',
	lat: 40,
	lon: -72,

	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
	group_profile: {
		status: 'active',
		visited: 1396285003000,
		created: 1395768492000,
		updated: 1478880527000,
		group: MOCK_GROUP,
		intro: 'cheese is the best!',
	},
};

export const MOCK_VENUE = {
	address_1: 'address 1',
	address_2: 'address 2',
	address_3: 'address 3',
	city: 'city name',
	state: 'NY',
	zip: '00000',
};

export const MOCK_COMMENT = {
	id: '1234',
	comment: 'comment 1',
	created: 1479838415,
	like_count: 6,
	member: MOCK_CHAPTER_MEMBER,
	deleted: false,
	visible: true,
	updated: 1479838415,
	utc_offset: -18000000,
	self: {
		liked: false,
		actions: ['like', 'delete', 'flag_spam'],
	},
};

export const MOCK_COMMENTS_LIST = {
	0: MOCK_COMMENT,
	1: {
		...MOCK_COMMENT,
		id: '12345',
		comment:
			'comment 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt facilisis dui ac tincidunt. Duis rutrum bibendum odio nec tincidunt. Suspendisse sagittis blandit venenatis.',
		created: 1478879940,
		like_count: 3,
		self: {
			liked: false,
			actions: ['like', 'delete', 'flag_spam'],
		},
	},
	2: {
		...MOCK_COMMENT,
		id: 21234,
		comment:
			'Morbi vel purus eu neque ultricies maximus. Nunc sollicitudin maximus justo sed fringilla.',
		created: 1478879939,
		like_count: 22,
		self: {
			liked: false,
			actions: ['like', 'flag_spam'],
		},
	},
	3: {
		...MOCK_COMMENT,
		id: 23423,
		comment:
			'Sed odio tortor, vulputate ut tincidunt vitae, dignissim eget felis.',
		created: 1478879939,
		like_count: 0,
		self: {
			liked: false,
			actions: ['like', 'delete', 'flag_spam'],
		},
	},
	4: {
		...MOCK_COMMENT,
		id: 234,
		comment:
			'Curabitur elit nisi, porta et elit non, efficitur sodales augue. Phasellus volutpat, lectus ac tempor laoreet, diam urna commodo lacus, eget bibendum risus augue a sem.',
		created: 1478879939,
		like_count: 0,
		self: {
			liked: false,
			actions: ['like', 'delete', 'flag_spam'],
		},
	},
};

const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
const oneMonthFuture = new Date();
oneMonthFuture.setMonth(oneMonthFuture.getMonth() + 1);
export const MOCK_EVENT = {
	id: '123456',
	comment_count: 5,
	created: oneMonthAgo.getTime(),
	description: `The coolest event in the world during which we will run and dance and sing
	<script>alert("bad time")</script>, 😊, &lt;blink&gt;what what&lt;blink&gt; this is getting
	longer than it needs to be why am I still typing omg`,
	duration: 3600000,
	name: 'So much fun',
	rsvp_sample: [
		{
			created: 1462833255609,
			id: 1234,
			member: MOCK_MEMBER,
			updated: 1462833255610,
		},
		{
			created: 1462833255609,
			id: 2345,
			member: { ...MOCK_MEMBER, ...{ id: 8912894 } },
			updated: 1462833255610,
		},
		{
			created: 1462833255609,
			id: 3456,
			member: { ...MOCK_MEMBER, ...{ id: 899828 } },
			updated: 1462833255610,
		},
	],
	venue: MOCK_VENUE,
	how_to_find_us: 'how to find us',
	event_hosts: [
		MOCK_CHAPTER_MEMBER,
		MOCK_CHAPTER_MEMBER_2,
		MOCK_CHAPTER_MEMBER_3,
	],
	fee: {
		amount: 10,
		currency: 'USD',
	},
	rsvpable: true,
	group: MOCK_GROUP,
	self: {
		actions: ['rsvp'],
		pay_status: 'none',
		rsvp: {},
	},
	status: 'upcoming',
	time: oneMonthFuture.getTime(),
	utc_offset: 0,
	visibility: 'public',
	yes_rsvp_count: 23,
	link: 'https://www.meetup.com/group/events/123456',
};

// Mock category sourced from https://www.meetup.com/meetup_api/docs/find/topic_categories/
export const MOCK_CATEGORY = {
	id: 552,
	shortname: 'movements',
	name: 'Movements',
	sort_name: 'Movements',
	photo: {
		id: 450131941,
		highres_link:
			'http://photos1.meetupstatic.com/photos/event/2/e/a/5/highres_450131941.jpeg',
		photo_link:
			'http://photos1.meetupstatic.com/photos/event/2/e/a/5/600_450131941.jpeg',
		thumb_link:
			'http://photos1.meetupstatic.com/photos/event/2/e/a/5/thumb_450131941.jpeg',
		type: 'event',
		base_url: 'http://photos1.meetupstatic.com',
	},
	category_ids: [4, 13],
	best_topics: [
		{
			id: 16645,
			name: 'Volunteering',
			urlkey: 'volunteering',
			lang: 'en_US',
		},
	],
};

export const MOCK_CATEGORIES = [MOCK_CATEGORY];

export const MOCK_EVENT_SCHEDULE_RESPONSE = {
	ref: 'eventSchedule',
	value: {
		created: 1505337385000,
		duration: 7200000,
		id: 'cgpwfnywmbsb',
		name: 'A Weekly Hike',
		status: 'upcoming',
		time: 1505430000000,
		updated: 1505337385000,
		utc_offset: -14400000,
		waitlist_count: 0,
		yes_rsvp_count: 0,
		group: {
			created: 1401198587000,
			name: 'Managing Meetup',
			id: 14705172,
			join_mod: 'approval',
			lat: 40.720001220703125,
			lon: -74,
			urlname: 'ManagingMeetup',
			who: 'Managers',
			localized_location: 'New York, NY',
			region: 'en_US'
		},
		link: 'https://www.dev.meetup.com/ManagingMeetup/events/cgpwfnywmbsb/',
		description: '<p>• What we\'ll do<br/>Hiking often! Mountains Forests all types of trails</p> <p>• What to bring<br/>Shoes and water</p>',
		visibility: 'public_limited'
	},
	meta: {
		server: 'ivy',
		requestId: 'c0ae499a-a473-43c5-94f8-f457c66f6c05',
		endpoint: 'ManagingMeetup/events/',
		statusCode: 201
	}
};

export const MOCK_EVENT_SCHEDULE_RESPONSE_ERRORS = {
	ref: 'eventSchedule',
	value: {
		errors: [{
			code:'name_error',
			message: 'A title is required to post your Meetup',
			field: 'name'
		}]
	},
	error: 'Bad Request',
	meta: {
		server: 'ivy',
		requestId: 'a6d2f9d3-9c98-416e-8f51-5753384c8de2',
		endpoint: 'ManagingMeetup/events/',
		statusCode: 400
	}
};

/*
 * Shallow mocks that don't include dynamic dates
 * for ease of use with snapshots.
 */

export const MOCK_SHALLOW_GROUP = {
	id: MOCK_GROUP.id,
	key_photo: MOCK_GROUP.key_photo,
	name: MOCK_GROUP.name,
	urlname: MOCK_GROUP.urlname,
	members: MOCK_GROUP.members,
	organizer: MOCK_GROUP.organizer,
	link: MOCK_GROUP.link,
	duotoneUrl: MOCK_GROUP.duotoneUrl,
	group_photo: MOCK_GROUP.group_photo,
	photo_gradient: MOCK_GROUP.photo_gradient,
	plain_text_description: MOCK_GROUP.plain_text_description,
	who: MOCK_GROUP.who,
};
export const MOCK_TIME = 1508279299118;
export const MOCK_SHALLOW_MEMBER = { id: MOCK_CHAPTER_MEMBER.id };
export const MOCK_SHALLOW_EVENT = {
	id: '123456',
	comment_count: 5,
	created: MOCK_TIME,
	description:
		'The coolest event in the world during which we will run and dance and sing\n\t<script>alert("bad time")</script>, \uD83D\uDE0A, &lt;blink&gt;what what&lt;blink&gt; this is getting\n\tlonger than it needs to be why am I still typing omg',
	duration: 3600000,
	name: 'So much fun',
	rsvp_sample: [
		{
			created: 1462833255609,
			id: 1234,
			member: MOCK_SHALLOW_MEMBER,
			updated: 1462833255610,
		},
		{
			created: 1462833255609,
			id: 2345,
			member: { ...MOCK_SHALLOW_MEMBER, id: 8912894 },
			updated: 1462833255610,
		},
		{
			created: 1462833255609,
			id: 3456,
			member: { ...MOCK_SHALLOW_MEMBER, id: 899828 },
			updated: 1462833255610,
		},
	],
	venue: MOCK_VENUE,
	how_to_find_us: 'how to find us',
	event_hosts: [],
	fee: {
		amount: 10,
		currency: 'USD',
	},
	rsvpable: true,
	group: MOCK_SHALLOW_GROUP,
	self: {
		actions: ['rsvp'],
		pay_status: 'none',
		rsvp: {},
	},
	status: 'upcoming',
	time: MOCK_TIME,
	utc_offset: 0,
	visibility: 'public',
	yes_rsvp_count: 23,
};

export const MOCK_EVENTS = [
	{ ...MOCK_SHALLOW_EVENT, id: '1111', status: 'upcoming' },
	{ ...MOCK_SHALLOW_EVENT, id: '2222', status: 'upcoming' },
	{ ...MOCK_SHALLOW_EVENT, id: '3333', status: 'upcoming' },
	{ ...MOCK_SHALLOW_EVENT, id: '4444', status: 'upcoming' },
];

export const MOCK_PAST_EVENTS = [
	{ ...MOCK_SHALLOW_EVENT, id: '5555', status: 'past' },
	{ ...MOCK_SHALLOW_EVENT, id: '6666', status: 'past' },
	{ ...MOCK_SHALLOW_EVENT, id: '7777', status: 'past' },
	{ ...MOCK_SHALLOW_EVENT, id: '8888', status: 'past' },
];

export const UPCOMING_EVENT = { ...MOCK_EVENTS[0], status: 'upcoming' };
export const PROPOSED_EVENT = { ...MOCK_EVENTS[1], status: 'proposed' };
export const PAST_EVENT = { ...MOCK_EVENTS[2], status: 'past' };

