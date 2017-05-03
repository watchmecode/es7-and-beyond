var jobsByFamily = {
  "small": [
    {
      id: 1,
      name: "Job 1"
    },
    {
      id: 2,
      name: "Job 2"
    },
    {
      id: 3,
      name: "Job 3"
    },
  ],
  "medium": [
    {
      id: 4,
      name: "Job 4"
    },
    {
      id: 5,
      name: "Job 5"
    }
  ],
  "large": [
    {
      id: 6,
      name: "Job 6"
    }
  ]
};

Object.entries(jobsByFamily).forEach( ([family, jobs]) => {
  console.log("Job Family:", family);
  jobs.forEach((job) => {
    console.log("  -", job.name, "(ID: " + job.id + ")");
  });
  console.log("");
});
