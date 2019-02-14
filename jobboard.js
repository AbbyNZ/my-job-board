// JavaScript Document
const jobboard = "https://codepen.io/jobs.json";
let jobsData;

const searchBtn = $('#search-btn').on("click",getJobs);

var currentTitle = '', currentCompany = '', currentDescription;

function getJobs() {
	return $.ajax({
		headers: {
      Accept: "application/json"
    },
    url:jobboard,
	success: function(jsonJobs){
		jobsData = JSON.parse(jsonJobs);
		console.log(jsonJobs);
	}
  });
}

function getJobByPosition() {
	$('.results').text(currentTitle);
	$('#job').html();
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
