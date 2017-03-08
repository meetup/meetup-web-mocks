export const MOCK_NOTIFICATION_UNREAD = {
	kind: 'event_announce',
	category: 'event',
	id: '420648864367595520',
	text: '<b>Meetup Engineering</b> just announced a new Meetup for Mar 9.',
	link: 'https://www.meetup.com/engineering/events/238251072/',
	target: {
		type: 'event',
		event_id: '238251072',
		group_id: 18234757,
		group_urlname: 'engineering'
	},
	updated: 1488929304000,
	important: false,
	read: false,
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
		'action': 'instant_rsvp'
	}
}

// Read notification
export const MOCK_NOTIFICATION_READ = {
	kind: 'event_reminder',
	category: 'event',
	id: '420566373152915456',
	text: '<b>Reminder:</b> <b>Feedback 101</b> and 1 other Meetup tomorrow',
	link: 'https://www.meetup.com/find/events/?allMeetups=true&eventFilter=my&month=3&day=8&year=2017',
	target: {
		type: 'event',
		event_id: '236641151',
		group_id: 530569,
		group_urlname: 'hq-faff'
	},
	updated: 1488909637000,
	important: false,
	read: true,
	photo: {
		id: 451682323,
		highres_link: 'http://photos2.meetupstatic.com/photos/event/9/1/3/highres_451682323.jpeg',
		photo_link: 'http://photos4.meetupstatic.com/photos/event/9/1/3/600_451682323.jpeg',
		thumb_link: 'http://photos2.meetupstatic.com/photos/event/9/1/3/thumb_451682323.jpeg',
		type: 'event',
		base_url: 'http://photos4.meetupstatic.com'
	},
	photo_type: 'event',
	setting: {
		push: {
			name: 'event_reminder_notif'
		},
		email: {
			name: 'event_reminder'
		}
	},
	self: {
		action: 'instant_rsvp'
	}
}
