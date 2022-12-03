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
const eventData = [
  {
    img: 'assests/Images/ethiopian-pm.png',
    eventName: 'Ethiopian PM',
    eventTitle: 'PM during 2022 Green Legacy Campaing Launch',
    desc: `The Prime Minister has officially launched the fourth green legacy program.`,
  },
  {
    img: 'assests/Images/oromia-planting.png',
    eventName: 'Oromia State',
    eventTitle: 'Oromia State Launches A Campaign To Plant 400 Million Trees In A Day',
    desc: `Oromia State Chief Administrator Shimelis has officially launched 
          the annual Green Legacy Initiative. `,
  },
  {
    img: 'assests/Images/sudan-duty-pm.png',
    eventName: 'Deputy Foreign Minister',
    eventTitle: 'Ethio-South Sudan Green Legacy 2022',
    desc: `Deputy Minister for Foreign Affairs the Republic of South Sudan, 
          Deng Dau Deng thanked the Ethiopian Community.`,
  },
  {
    img: 'assests/Images/moe-universities.png',
    eventName: 'Public Universities',
    eventTitle: 'Public Universities launch the 2022 GLI',
    desc: `Ethiopian Ministry of Education (MoE), in collaboration with a coalition of public universities
           in officially launched the 2021 GLI `,
  },
  {
    img: 'assests/Images/total-eng.png',
    eventName: 'TotalEnergies Ethiopia',
    eventTitle: 'Total Ethiopia Took Part in GLI',
    desc: `Total Ethiopia took part in the National Green Legacy campaign on July 29, 2019. 
          The objective of the campaign was to plant more than 200 million tree saplings in one day.`,
  },
  {
    img: 'assests/Images/selfhelp-africa.png',
    eventName: 'Self Help Africa',
    eventTitle: 'SelfHelp Africa Played part in GLI',
    desc: `Self Help Africa is working with communities, as part of Ethiopia’s green legacy, 
          to plant a total of 300,000 tree seedlings on degraded farmlands.`,
  },
];

const events = document.querySelector('.events');

window.addEventListener('DOMContentLoaded', () => {
  const eventsData = eventData.map((article) => `<article>
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
  events.innerHTML = eventsData;
});
