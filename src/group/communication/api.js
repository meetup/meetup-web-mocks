import {
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER_2,
	MOCK_CHAPTER_MEMBER_3,
	MOCK_GROUP
} from '../../api';

export const MOCK_GROUP_COMMUNICATION = {
	id:'1342',
	description:'Some Mock Conversation',
	hashtag:'#ideas',
	group:MOCK_GROUP,
	creator:MOCK_CHAPTER_MEMBER,
	num_comments:63,
	deleted:false,
	visible:true,
	created:1477520127,
	utc_offset:-18000000,
	updated:1477520127,
	self:{
		followed:true,
		actions:[
			'delete',
			'comment',
			'follow',
			'flag_spam'
		]
	}
};

export const MOCK_GROUP_COMMUNICATION_FOLLOWERS = [
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER_2,
	MOCK_CHAPTER_MEMBER_3
];

export const MOCK_GROUP_COMMUNICATION_SUGGESTED_FOLLOWERS = [
	MOCK_CHAPTER_MEMBER,
	MOCK_CHAPTER_MEMBER_2
];
