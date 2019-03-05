// JavaScript Document
const jobboard = 'https://codepen.io/jobs.json';
const $jobContainer = $('#job');
const $searchBtn = $('#search-jobs');

$searchBtn.on("click", getJobs);

var currentTitle = '', currentCompany = '', currentDescription;

function getJobs() {
	$jobContainer.html('<div class="loader" />');
	
	$.getJSON(jobboard)
    .done(data => {
      const jobs = data.jobs;
      const job = jobs[Math.floor(Math.random() * jobs.length)];
      const jobHtml = `
        <h2>
          <a href="${job.jobboard}" target="_blank">${job.title}</a>
        </h2>
        <p>at ${job.company_name}</p>
        <p>
          <a href="${job.jobboard}"
             target="_blank"
             title="Click to learn more about being a ${job.title} at ${job.company_name}"
             class="btn btn-sm">Learn More
          </a>
        </p>
      `;
		
		 $jobContainer.html(jobHtml);
      $searchBtn.text('Find another job');
	})
		.fail(() => {
			jobContainer.html(`<p>A job could not be fetched at this time.</p>`);
		});
}
