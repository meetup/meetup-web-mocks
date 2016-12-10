import {
   MOCK_CHAPTER_MEMBER,
   MOCK_GROUP
} from '../../api';

export const MOCK_GROUP_COMMUNICATION = {
	"id":1342,
	"description":"Some Mock Conversation",
	"hashtag":"#ideas",
	"group":MOCK_GROUP,
	"creator":MOCK_CHAPTER_MEMBER,
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


export const MOCK_GROUP_COMMUNICATION_COMMENTS = {  
   "0":{
      "id":1234,
      "comment":"comment 1",
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
      "comment":"comment 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt facilisis dui ac tincidunt. Duis rutrum bibendum odio nec tincidunt. Suspendisse sagittis blandit venenatis.",
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
      "comment":"Morbi vel purus eu neque ultricies maximus. Nunc sollicitudin maximus justo sed fringilla.",
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
      "comment":"Sed odio tortor, vulputate ut tincidunt vitae, dignissim eget felis.",
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
      "comment":"Curabitur elit nisi, porta et elit non, efficitur sodales augue. Phasellus volutpat, lectus ac tempor laoreet, diam urna commodo lacus, eget bibendum risus augue a sem.",
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

export const MOCK_GROUP_COMMUNICATION_FOLLOWERS = [
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER
];

export const MOCK_GROUP_COMMUNICATION_SUGGESTED_FOLLOWERS = [
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER
];