import axios from 'axios';
import qs from 'qs';

const base = process.env.VUE_APP_AIRTABLE_BASE;
const airtableApiKey = process.env.VUE_APP_AIRTABLE_API_KEY;

const fetchRecords = (offset, table, view) => new Promise((resolve) => {
	const apiUrl = `https://api.airtable.com/v0/${base}/${table}${view}`;

	axios({
		url: apiUrl,
		headers: {
			Authorization: `Bearer ${airtableApiKey}`,
		},
		params: {
			offset: offset,
        },
		paramsSerializer: function(params) {
			return qs.stringify(params, {arrayFormat: 'indices'})
		},
	}).then((response) => {
		resolve(response.data);
	});
});

export { fetchRecords };
