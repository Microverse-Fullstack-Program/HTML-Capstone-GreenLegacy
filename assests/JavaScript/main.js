const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.topNav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('mobile-Navlinks');
});

navLinkItems.forEach((linkItem) => {
  linkItem.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('mobile-Navlinks');
  });
});

// Display Green Legacy Events Section Dynamically
const performersData = [
  {
    img: 'assests/Images/ethiopian-pm.png',
    eventName: 'Ethiopian PM',
    eventTitle: 'PM during 2022 Green Legacy Campaing Launch',
    desc: `The Prime Minister has officially launched the fourth green legacy program which will be 
            implemented under the theme “Our Imprint for Our Children”.`,
  },
  {
    img: 'assests/Images/oromia-planting.png',
    eventName: 'Oromia State',
    eventTitle: 'Oromia State Launches A Campaign To Plant 400 Million Trees In A Day',
    desc: `Oromia State Chief Administrator Shimelis Abdisa has officially launched 
          the annual Green Legacy Initiative in the presence of high level government officials
            and public representatives at regional level. `,
  },
  {
    img: 'assests/Images/sudan-duty-pm.png',
    eventName: 'S. Sudan’s Deputy Foreign Minister',
    eventTitle: 'Ethiopia-South Sudan Green Legacy 2022',
    desc: `Deputy Minister for Foreign Affairs and International Cooperation of the Republic of South Sudan, 
          Deng Dau Deng thanked the Ethiopian Community and members of the peacekeeping force for their participation
          in the tree planting program.`,
  },
  {
    img: 'assests/Images/moe-universities.png',
    eventName: 'Public Universities Officials',
    eventTitle: 'Ethiopian public Universities launch the 2022 Green Legacy Initiative',
    desc: `Ethiopian Ministry of Education (MoE), in collaboration with a coalition of four public universities
           in Addis Ababa and the attendance of top officials of the Ministry and leaders of the universities, 
           have officially launched the 2021 Green Legacy Initiative at Addis Ababa `,
  },
  {
    img: 'assests/Images/total-eng.png',
    eventName: 'TotalEnergies Ethiopia',
    eventTitle: 'Total Ethiopia Took Part in the National Green Legacy Campaign',
    desc: `Total Ethiopia took part in the National Green Legacy campaign on July 29, 2019. 
          The objective of the campaign was to plant more than 200 million tree saplings in one day.`,
  },
  {
    img: 'assests/Images/selfhelp-africa.png',
    eventName: 'Self Help Africa',
    eventTitle: 'Self Help Africa Group Played a part in the Green legacy initiative',
    desc: `Self Help Africa is working with communities, as part of Ethiopia’s green legacy, 
          to plant a total of 300,000 tree seedlings on degraded farmlands around Lake Ziway, 
          close to Adami Tulu, the site of the organisation’s very first African development project.`,
  },
];

const performers = document.querySelector('.events');

window.addEventListener('DOMContentLoaded', () => {
  const performersString = performersData.map((article) => `<article>
        <img src=${article.img} alt="Green Legacy Past Years Activities">
        <div class="event-info">
            <h3 class="event-name">${article.eventName}</h3>
            <p class="event-title">${article.eventTitle}</p>
            <p class="event-desc">
                ${article.desc}
            </p>
        </div>
    </article>`)
    .join('');
  performers.innerHTML = performersString;
});
