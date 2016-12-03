var _ = require('lodash');

var people = 
[{
  "id": 1,
  "gender": "Male",
  "first_name": "Brian",
  "last_name": "Morales",
  "email": "bmorales0@epa.gov",
  "ip_address": "106.43.247.185"
}, {
  "id": 2,
  "gender": "Female",
  "first_name": "Kathryn",
  "last_name": "Washington",
  "email": "kwashington1@moonfruit.com",
  "ip_address": "49.55.53.205"
}, {
  "id": 3,
  "gender": "Female",
  "first_name": "Angela",
  "last_name": "Collins",
  "email": "acollins2@latimes.com",
  "ip_address": "25.67.64.199"
}, {
  "id": 4,
  "gender": "Male",
  "first_name": "Joe",
  "last_name": "Williamson",
  "email": "jwilliamson3@ed.gov",
  "ip_address": "213.117.163.191"
}, {
  "id": 5,
  "gender": "Female",
  "first_name": "Sharon",
  "last_name": "Cunningham",
  "email": "scunningham4@psu.edu",
  "ip_address": "144.28.33.47"
}, {
  "id": 6,
  "gender": "Male",
  "first_name": "Sean",
  "last_name": "Hudson",
  "email": "shudson5@skyrock.com",
  "ip_address": "52.56.195.211"
}, {
  "id": 7,
  "gender": "Female",
  "first_name": "Christina",
  "last_name": "Washington",
  "email": "cwashington6@economist.com",
  "ip_address": "27.220.96.79"
}, {
  "id": 8,
  "gender": "Female",
  "first_name": "Irene",
  "last_name": "Reed",
  "email": "ireed7@state.gov",
  "ip_address": "44.154.76.229"
}, {
  "id": 9,
  "gender": "Female",
  "first_name": "Melissa",
  "last_name": "Hansen",
  "email": "mhansen8@washingtonpost.com",
  "ip_address": "75.117.173.170"
}, {
  "id": 10,
  "gender": "Female",
  "first_name": "Tammy",
  "last_name": "Ford",
  "email": "tford9@wisc.edu",
  "ip_address": "21.140.226.145"
}, {
  "id": 11,
  "gender": "Male",
  "first_name": "Craig",
  "last_name": "Sims",
  "email": "csimsa@webnode.com",
  "ip_address": "181.227.140.78"
}, {
  "id": 12,
  "gender": "Male",
  "first_name": "Timothy",
  "last_name": "West",
  "email": "twestb@ameblo.jp",
  "ip_address": "78.41.20.94"
}, {
  "id": 13,
  "gender": "Female",
  "first_name": "Heather",
  "last_name": "Knight",
  "email": "hknightc@over-blog.com",
  "ip_address": "251.145.66.134"
}, {
  "id": 14,
  "gender": "Male",
  "first_name": "Gary",
  "last_name": "Brown",
  "email": "gbrownd@slashdot.org",
  "ip_address": "61.249.226.3"
}, {
  "id": 15,
  "gender": "Female",
  "first_name": "Donna",
  "last_name": "Sullivan",
  "email": "dsullivane@stanford.edu",
  "ip_address": "108.135.243.101"
}, {
  "id": 16,
  "gender": "Male",
  "first_name": "Brandon",
  "last_name": "Green",
  "email": "bgreenf@techcrunch.com",
  "ip_address": "227.232.164.177"
}, {
  "id": 17,
  "gender": "Male",
  "first_name": "Lawrence",
  "last_name": "Sanders",
  "email": "lsandersg@nyu.edu",
  "ip_address": "82.219.111.88"
}, {
  "id": 18,
  "gender": "Male",
  "first_name": "Henry",
  "last_name": "Hanson",
  "email": "hhansonh@google.ru",
  "ip_address": "112.51.37.183"
}, {
  "id": 19,
  "gender": "Male",
  "first_name": "Terry",
  "last_name": "Cole",
  "email": "tcolei@toplist.cz",
  "ip_address": "104.205.85.7"
}, {
  "id": 20,
  "gender": "Female",
  "first_name": "Christina",
  "last_name": "Watkins",
  "email": "cwatkinsj@spotify.com",
  "ip_address": "218.163.215.210"
}];

var femaleCount = _.filter(people, {gender: 'Female'}).length;
alert(femaleCount);

console.log('module2');