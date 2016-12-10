import {
	MOCK_GROUP_COMMUNICATION,
	MOCK_GROUP_COMMUNICATION_COMMENTS,
	MOCK_GROUP_COMMUNICATION_FOLLOWERS,
	MOCK_GROUP_COMMUNICATION_SUGGESTED_FOLLOWERS
} from './api';

export const MOCK_COMM_APP_STATE = {
	groupCommunication: {
		type: 'groupCommunication',
		value: MOCK_GROUP_COMMUNICATION
	},
	groupCommunicationComments: {
		type: 'groupCommunicationComments',
		value: MOCK_GROUP_COMMUNICATION_COMMENTS
	},
	groupCommunicationFollowers: {
		type: 'groupCommunicationFollowers',
		value: MOCK_GROUP_COMMUNICATION_FOLLOWERS
	},
	groupCommunicationSuggestedFollowers: {
		type: 'groupCommunicationSuggestedFollowers',
		value: MOCK_GROUP_COMMUNICATION_SUGGESTED_FOLLOWERS
	}
};