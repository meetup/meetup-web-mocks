export const MOCK_NOTIFICATION_GROUP = {
	kind: 'group_announce',
	category: 'group',
	id: '428939774154616832',
	text: 'This new Meetup just started: <b>Central Park painting Plain Air</b>.',
	link: 'https://www.meetup.com/Central-Park-painting-Plain-Air/',
	target: {
		type: 'group',
		group_id: 23051170,
		group_urlname: 'Central-Park-painting-Plain-Air'
	},
	updated: 1490906011000,
	important: false,
	read: false,
	photo: {
		id: 453652197,
		highres_link: 'http://photos3.meetupstatic.com/photos/event/c/b/e/5/highres_453652197.jpeg',
		photo_link: 'http://photos3.meetupstatic.com/photos/event/c/b/e/5/600_453652197.jpeg',
		thumb_link: 'http://photos3.meetupstatic.com/photos/event/c/b/e/5/thumb_453652197.jpeg',
		type: 'event',
		base_url: 'http://photos3.meetupstatic.com'
	},
	photo_type: 'event',
	setting: {
		email: {
			name: 'new_group_alert'
		}
	},
	self: {
		action: 'instant_join'
	}
};

export const MOCK_NOTIFICATION_EVENT = {
	kind: 'event_announce',
	category: 'event',
	id: '428867509608992768',
	text: '<b>Meetup Engineering</b> just announced a new Meetup for Apr 6. Only 13 spots.',
	link: 'https://www.meetup.com/engineering/events/238829706/',
	target: {
		type: 'event',
		event_id: '238829706',
		group_id: 18234757,
		group_urlname: 'engineering'
	},
	updated: 1490888782000,
	important: false,
	read: true,
	photo: {
		id: 434003882,
		highres_link: 'http://photos4.meetupstatic.com/photos/event/5/d/4/a/highres_434003882.jpeg',
		photo_link: 'http://photos4.meetupstatic.com/photos/event/5/d/4/a/600_434003882.jpeg',
		thumb_link: 'http://photos4.meetupstatic.com/photos/event/5/d/4/a/thumb_434003882.jpeg',
		type: 'event',
		base_url: 'http://photos4.meetupstatic.com'
	},
	photo_type: 'event',
	setting: {
		push: {
			name: 'event_announce_notif'
		},
		email: {
			name: 'event_announce'
		}
	},
	self: {
		action: 'instant_rsvp'
	}
};

export const MOCK_NOTIFICATION_COMMENT = {
	kind: 'mug_comm_comment',
	category: 'comment',
	id: '426750535552851968',
	text: 'will howard and 2 others commented on "Test delete actions"',
	link: 'https://www.meetup.com/hq-faff/communications/17056/',
	target: {
		type: 'external_url',
		url: 'https://www.meetup.com/hq-faff/communications/17056/',
		web_view: true
	},
	updated: 1490384056000,
	important: true,
	read: true,
	photo: {
		id: 6098126,
		highres_link: 'http://photos3.meetupstatic.com/photos/member/9/4/e/e/highres_6098126.jpeg',
		photo_link: 'http://photos1.meetupstatic.com/photos/member/9/4/e/e/member_6098126.jpeg',
		thumb_link: 'http://photos3.meetupstatic.com/photos/member/9/4/e/e/thumb_6098126.jpeg',
		type: 'member',
		base_url: 'http://photos3.meetupstatic.com'
	},
	photo_type: 'member',
	setting: {
		push: {
			name: 'group_activity_notif'
		},
		email: {
			name: 'event_comments'
		}
	}
};

export const MOCK_NOTIFICATIONS_LIST = [
	MOCK_NOTIFICATION_GROUP,
	MOCK_NOTIFICATION_COMMENT,
	MOCK_NOTIFICATION_GROUP,
	MOCK_NOTIFICATION_EVENT,
	MOCK_NOTIFICATION_COMMENT,
	MOCK_NOTIFICATION_COMMENT,
	MOCK_NOTIFICATION_EVENT,
	MOCK_NOTIFICATION_GROUP,
	{ ...MOCK_NOTIFICATION_GROUP, read: true },
	{ ...MOCK_NOTIFICATION_COMMENT, read: true },
	{ ...MOCK_NOTIFICATION_GROUP, read: true },
	{ ...MOCK_NOTIFICATION_EVENT, read: true },
	{ ...MOCK_NOTIFICATION_COMMENT, read: true },
	{ ...MOCK_NOTIFICATION_COMMENT, read: true },
	{ ...MOCK_NOTIFICATION_EVENT, read: true },
	{ ...MOCK_NOTIFICATION_GROUP, read: true }
];
