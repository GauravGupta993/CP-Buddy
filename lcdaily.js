const getlcdaily = require('./utils/getlcdaily');
const getlcsubmissions = require('./utils/getlcsubmissions');

(async()=>{
  const daily=(await getlcdaily());
  const submissions=(await getlcsubmissions("Lelouch_Britannia"));
  let x=0;
  for(submission in submissions){
    // console.log(submissions[submission].title);
    if(submissions[submission].title===daily){
      x=1;
    }
  }
  console.log(x);
})();
