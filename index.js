const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})



fetch('data.json')
.then(response => response.json())
.then(data => {
  const contentDiv = document.getElementById("pfp");
  const skillpic = document.getElementById("skx");
  const edupic = document.getElementById("edu");
  const exppic = document.getElementById("exp");

  const skills = document.getElementById("skills-text");
  const education = document.getElementById("education-text");
  const experience = document.getElementById("experience-text");

  // Create img element
  const img = document.createElement('img');
  img.src = data.image; // Set image source from JSON
  const skillimg = document.createElement('img');
  skillimg.src = data.skillImg;
  const eduimg = document.createElement('img');
  eduimg.src = data.educationImg;
  const expimg = document.createElement('img');
  expimg.src = data.experienceImg;

  // Create element for text
  const s = document.createElement('p');
  s.textContent = data.skillText; // Set text content from JSON

  const ed = document.createElement('p');
  ed.textContent = data.educationText;

  const ex = document.createElement('p');
  ex.textContent = data.experienceText;
  // Append 
  skillpic.appendChild(skillimg);
  edupic.appendChild(eduimg);
  exppic.appendChild(expimg);
  contentDiv.appendChild(img);
  skills.appendChild(s);
  education.appendChild(ed);
  experience.appendChild(ex);
})
.catch(error => console.error('Error fetching data:', error));

