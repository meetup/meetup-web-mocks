export const MOCK_MEMBER = {
	name: 'mocky mcmockerson',
	id: 1243,
	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
};

export const MOCK_SELF = { ...MOCK_MEMBER, ...({ lang: 'en_US' }) };
export const MOCK_SELF_FR = { ...MOCK_MEMBER, ...({ lang: 'fr_FR' }) };

export const MOCK_DUOTONES = [
	['a', 'b']
];
export const MOCK_DUOTONE_URLS = {
	dtaxb: 'http://a.b',
};

export const MOCK_GROUP = {
	id: 1234,
	urlname: 'fake-hq-faff',
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
	who: 'Faffers',
	members: 999,
	photo_gradient: {
		light_color: MOCK_DUOTONES[0][1],
		dark_color: MOCK_DUOTONES[0][0],
	},
	event_sample: [{
		id: 1234,
		name: 'Sample event',
		time: new Date().getTime(),
		yes_rsvp_count: 50
	}],
};

export const MOCK_CHAPTER_MEMBER = {
	id:82159492,
	name:"Grayson Cheese",
	status:"active",
	joined:1361806241000,
	city:"new york",
	country:"us",
	lat:40,
	lon:-72,

	photo: {
		photo_link: 'http://placekitten.com/g/400/400',
	},
	group_profile: {  
	  status:"active",
	  visited:1396285003000,
	  created:1395768492000,
	  updated:1478880527000,
	  group: MOCK_GROUP,
	  intro: "cheese is the best!",
	}
};


const oneMonthAgo = new Date();
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
const oneMonthFuture = new Date();
oneMonthFuture.setMonth(oneMonthFuture.getMonth() + 1);
export const MOCK_EVENT = {
	id: 123456,
	comment_count: 5,
	created: oneMonthAgo.getTime(),
	description: `The coolest event in the world during which we will run and dance and sing
	<script>alert("bad time")</script>, 😊, &lt;blink&gt;what what&lt;blink&gt; this is getting
	longer than it needs to be why am I still typing omg`,
	duration: 3600000,
	name: 'So much fun',
	rsvp_sample: [{
		created: 1462833255609,
		id: 1234,
		member: MOCK_MEMBER,
		updated: 1462833255610
	}, {
		created: 1462833255609,
		id: 2345,
		member: { ...MOCK_MEMBER, ...({ id: 8912894 }) },
		updated: 1462833255610
	}, {
		created: 1462833255609,
		id: 3456,
		member: { ...MOCK_MEMBER, ...({ id: 899828 }) },
		updated: 1462833255610
	}],
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
	yes_rsvp_count: 23
};

export const MOCK_GROUP_COMMUNICATION = {
	"id":1342,
	"description":"Some Mock Conversation",
	"hashtag":"#ideas",
	"group":MOCK_GROUP,
	"creator":MOCK_MEMBER,
	"num_comments":63,
	"deleted":false,
	"visible":true,
	"created":1477520127,
	"utc_offset":-18000000,
	"updated":1477520127,
	"self":{
		"followed":true,
		"actions":[
			"delete",
			"comment",
			"follow",
			"flag_spam"
		]
	}
};


export const MOCK_GROUP_COMMENTS = {  
   "0":{  
      "id":1234,
      "comment":"blue!",
      "created":1479838415,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1479838415,
      "updated":1479838415,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "delete"
         ]
      }
   },
   "1":{  
      "id":12345,
      "comment":"test 40",
      "created":1478879940,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1478879940,
      "updated":1478879940,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "delete",
            "flag_spam"
         ]
      }
   },
   "2":{  
      "id":21234,
      "comment":"test 1",
      "created":1478879939,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1478879939,
      "updated":1478879939,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "flag_spam"
         ]
      }
   },
   "3":{  
      "id":23423,
      "comment":"test 2",
      "created":1478879939,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1478879939,
      "updated":1478879939,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "delete",
            "flag_spam"
         ]
      }
   },
   "4":{  
      "id":234,
      "comment":"test 3",
      "created":1478879939,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1478879939,
      "updated":1478879939,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "delete",
            "flag_spam"
         ]
      }
   },
   "5":{  
      "id":23423,
      "comment":"test 4",
      "created":1478879939,
      "like_count":0,
      "member":MOCK_CHAPTER_MEMBER,
      "deleted":false,
      "visible":true,
      "created":1478879939,
      "updated":1478879939,
      "utc_offset":-18000000,
      "self":{  
         "liked":false,
         "actions":[  
            "like",
            "delete",
            "flag_spam"
         ]
      }
   }
};