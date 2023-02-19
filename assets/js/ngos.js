/* Script which contains the different NGO's */

const ngosCategories = ["Children", "Animal Welfare", "Environmental", "Humanitarian"];

// Category = add the type of category
const ngos = [
  {
    "name": "Direct Relief",
    "description": "Direct Relief is an international humanitarian aid organization that provides medical assistance to people in need.",
    "image": "direct_relief.png",
    "link": "https://www.directrelief.org/",
    "donationLink": "https://donate.directrelief.org/give/406660/#!/donation/checkout",
    "category": "Humanitarian"
  },
  {
    "name": "Save the Children",
    "description": "Save the Children is a global charity organization that works to improve the lives of children around the world.",
    "image": "save_the_children.jpeg",
    "link": "https://www.savethechildren.net/",
    "donationLink": "https://donate.savethechildren.org/en/donate/donate",
    "category": "Children"  
  },
  {
    "name": "Oxfam",
    "description": "Oxfam is an international organization that works to tackle poverty and injustice around the world.",
    "image": "oxfam.png",
    "link": "https://www.oxfamireland.org/",
    "donationLink": "https://donate.oxfamireland.org/euro/~my-donation",
    "category": "Humanitarian" 
  },
  {
    "name": "World Vision",
    "description": "World Vision is a charity organization that provides assistance to children, families, and communities in need around the world.",
    "image": "world_vision.jpeg",
    "link": "https://www.worldvision.ie/",
    "donationLink": "https://www.worldvision.ie/sponsor-a-child-c/",
    "category": "Humanitarian" 
  },
  {
    "name": "St. Jude Children’s Research Hospital",
    "description": "St. Jude Children’s Research Hospital is a leading children’s hospital that provides care and research for children with cancer and other life-threatening diseases.",
    "image": "st_jude.png",
    "link": "https://www.stjude.org/",
    "donationLink": "https://www.stjude.org/donate/donate-to-st-jude.html",
    "category": "Children" 
  },
  {
    "name": "Irish Refugee Council",
     "description": "We provide services and support for people seeking protection and people recognised as refugees in Ireland",
     "image": "IRClogo.png",
     "link": "https://www.irishrefugeecouncil.ie/",
     "donationLink": "https://www.irishrefugeecouncil.ie/donate/donate/5/credit-card",
     "category": "Humanitarian" 
 },
 {
  "name": "Macmillan Cancer Support",
  "description": "a charity dedicated to providing practical, medical and financial support to those affected by cancer.",
  "image": "macmillan.png",
  "link": "https://www.macmillan.org.uk/",
  "donationLink": "https://donation.macmillan.org.uk/?_ga=2.151836473.1070642207.1676743728-720868227.1676743727",
  "category": "Humanitarian"  
},
{
  "name": "MIND",
  "description": "a mental health charity providing advice and support to empower anyone experiencing a mental health problem.",
  "image": "mind.png",
  "link": "https://www.mind.org.uk/",
  "donationLink": "https://www.mind.org.uk/donate/",
  "category": "Humanitarian"  
},
{
  "name": "Great Ormond Street Hospital Children’s Charity",
  "description": "dedicated to improving the health and well-being of children, young people and their families.",
  "image": "gosh.png",
  "link": "https://www.gosh.org/",
  "donationLink": "https://www.gosh.org/donate/",
  "category": "Children"  
},
{
  "name": "The British Heart Foundation",
  "description": "dedicated to fighting heart and circulatory diseases and helping people to lead a healthier life.",
  "image": "bhf.png",
  "link": "https://www.bhf.org.uk/",
  "donationLink": "https://www.bhf.org.uk/how-you-can-help/donate/your-donation/get-started",
  "category": "Humanitarian"  
},
{
  "name": "CONCERN",
   "description": "Our vision, our mission and our work are all defined by one goal – ending extreme poverty, whatever it takes",
   "image": "concernlogo.png",
   "link": "https://www.concern.net/",
   "donationLink": "https://www.concern.net/donate",
   "category": "Humanitarian"  
},
{
  "name": "WaterAid",
  "description": "providing clean water and decent toilets to the world’s poorest communities.",
  "image": "wateraid.png",
  "link": "https://www.wateraid.org/uk/",
  "donationLink": "https://www.wateraid.org/uk/donate/donate-2",
  "category": "Humanitarian"  
},
{
  "name": "UNICEF UK",
  "description": "providing children around the world with health care, education and protection.",
  "image": "unicefuk.png",
  "link": "https://www.unicef.org.uk/",
  "donationLink": "https://www.unicef.org.uk/donate/syria-turkiye-earthquake/",
  "category": "Children"  
},
{
  "name": "Sea-Watch",
  "description": "working to protect refugees and migrants at sea, to provide medical aid, and to combat the causes of flight and displacement.",
  "image": "seawatch.png",
  "link": "https://sea-watch.org/",
  "donationLink": "https://sea-watch.org/en/sea-watch-5/#!/donate",
  "category": "Humanitarian"  
},
{
  "name": "Fundación Avina",
  "description": "a non-profit organization that works to promote a sustainable and equitable society in Latin America.",
  "image": "avina.png",
  "link": "https://www.avina.net/",
  "donationLink": "https://www.avina.net/en/donate-fundacion-avina/",
  "category": "Humanitarian"  
},
{
  "name": "African Wildlife Foundation",
  "description": "working to conserve Africa’s wildlife and wild lands.",
  "image": "awf.png",
  "link": "https://www.awf.org/",
  "donationLink": "https://secure.awf.org/page/119125/donate/1",
  "category": "Animal Welfare"  
},
{
  "name": "Amnesty International Africa",
  "description": "promoting and protecting human rights in Africa.",
  "image": "amnesty.png",
  "link": "https://www.amnesty.org/en/countries/africa/",
  "donationLink": "https://www.amnesty.org/en/donate/",
  "category": "Humanitarian"  
},
{
  "name": "World Wide Fund for Nature",
  "description": "Working to stop destruction of nature and to help recover it.",
  "image": "wwf-logo.png",
  "link": "https://www.wwf.org.uk/",
  "donationLink": "https://support.wwf.org.uk/donate-to-wwf",
  "category": "Animal Welfare"
},
{
  "name": "Greenpeace",
  "description": "Greenpeace is a movement of people who are passionate about defending the natural world from destruction.",
  "image": "greenpeace-logo.png",
  "link": "https://www.greenpeace.org/global/",
  "donationLink": "https://www.greenpeace.org.uk/support-us/",
  "category": "Environmental"
},
{
  "name": "Conservation International",
  "description": "Works with scientists, local communities and practitioners in the field to protect nature, global biodiversity and human communities.",
  "image": "ci_logo.png",
  "link": "https://www.conservation.org/",
  "donationLink": "https://action.conservation.org/KZ_85D9j1keSOQmawof3vA2?sourceid=1041102&SelectedFrequency=4&recurringam=50&ms=/",
  "category": "Environmental"
},
{
  "name": "Rainforest Alliance",
  "description": "Building an alliance to protect forests, improve the livelihoods of farmers and forest communities and help to mitigate the climate crisis.",
  "image": "rainforest-alliance-logo.png",
  "link": "https://www.rainforest-alliance.org/",
  "donationLink": "https://give.rainforest-alliance.org/give/291977/?&_ga=2.101878913.184566053.1676804435-1170181138.1676804435#!/donation/checkout?c_src=MDW22BX&c_src2=2202mwebfndmainnav",
  "category": "Environmental"
},
{
  "name": "Barnardos",
  "description": "To deliver services and work with families, communities, and our partners to transform the lives of vulnerable children who are affected by adverse childhood experiences.",
  "image": "barnardos.png",
  "link": "https://www.barnardos.ie/",
  "donationLink": "https://www.barnardos.ie/how-you-can-help/fundraising/donate/make-a-donation",
  "category": "Children"
},
{
  "name": "ISPCA",
  "description": "The ISPCA is Ireland’s largest national animal welfare charity, and represents a number of affiliated member societies.",
  "image": "ispca-logo.png",
  "link": "https://www.ispca.ie/",
  "donationLink": "https://www.ispca.ie/donate/once_off",
  "category": "Animal Welfare"
},
{
  "name": "Four Paws",
  "description": "Our vision is a world where humans treat animals with respect, empathy and understanding.",
  "image": "four-paws.png",
  "link": "https://www.four-paws.org/",
  "donationLink": "https://donate.four-paws.org/s/",
  "category": "Animal Welfare"
},
{
  "name": "National Resources Defense Council",
  "description": "NRDC is a non-profit organization that works to protect the environment, wildlife, and public health. They also advocate for strong environmental laws and policies.",
  "image": "nrdc.png",
  "link": "https://www.nrdc.org/",
  "donationLink": "https://action.nrdc.org/donation/771-support-nrdc?initms=HOMERB&ms=HOMERB&_ga=2.142286257.265554035.1676828047-1213191235.1676828046",
  "category": "Environmental"
},
{
  "name": "Ocean Conservancy",
  "description": "works to protect the world's oceans and marine life. They advocate for the protection of important ocean habitats and the sustainable use of ocean resources.",
  "image": "oc.png",
  "link": "https://oceanconservancy.org/",
  "donationLink": "https://donate.oceanconservancy.org/page/92465/donate/1?ea.tracking.id=23ZPBPEAXX",
  "category": "Environmental"
},
{
  "name": "Marine Conservation Society",
  "description": "UK-based charity dedicated to protecting the ocean and its wildlife through scientific research, lobbying, and education.",
  "image": "mcs.png",
  "link": "https://www.mcsuk.org/",
  "donationLink": "https://www.mcsuk.org/make-a-donation/",
  "category": "Environmental"
},
{
  "name": "Friends of the Earth",
  "description": "UK-based environmental charity working to protect and restore the environment. They work to address climate change and promote sustainable development.",
  "image": "friendso.png",
  "link": "https://friendsoftheearth.uk/",
  "donationLink": "https://friendsoftheearth.uk/donate/donate-today",
  "category": "Environmental"
},
{
  "name": "World Animal Protection",
  "description": "It is an international animal welfare organization that works to protect animals and end animal suffering.",
  "image": "wap.png",
  "link": "https://www.worldanimalprotection.org/",
  "donationLink": "https://secure.worldanimalprotection.org.uk/get-involved/donate/~my-donation?_ga=2.197437551.1546894885.1676833269-1310008308.1676833269",
  "category": "Animal Welfare"
},
{
  "name": "HSUS",
  "description": "It works to end animal cruelty, promote animal welfare, and protect wild animals and habitats.",
  "image": "hsus.png",
  "link": "https://www.humanesociety.org/",
  "donationLink": "https://secured.humanesociety.org/page/81880/donate/1?ea.tracking.id=web_topnav_donate&_gl=1*1afo4nq*_ga*OTc3NTUzODExLjE2NzY4MzM0Mjg.*_ga_DGPX92WLR5*MTY3NjgzMzQyNy4xLjEuMTY3NjgzMzQyNy42MC4wLjA.*_fplc*Z1hHaElrVVBTeVdKdUo2RlVBRkJ5RnQxQTgyZGJtMUpTNWRWd2JDJTJGQVhMamE3WE5RTnFTdW1pcFZQQnk3aUV5NTNXaXZNekNoT0NMRjdjWTZ0ciUyRjkyNzQlMkJwend2OTM5MDRqeHVnNTZQZnQyJTJCM3hqTmZuU3J3U0RVYlA5aVElM0QlM0Q.",
  "category": "Animal Welfare"
},
{
  "name": "The Donkey Sanctuary",
  "description": "It is a UK-based charity that works to protect and improve the welfare of donkeys and mules around the world.",
  "image": "donkey.png",
  "link": "https://www.thedonkeysanctuary.org.uk/",
  "donationLink": "https://www.thedonkeysanctuary.org.uk/support-us/donate",
  "category": "Animal Welfare"
},
{
  "name": "Wildlife SOS",
  "description": "works to protect and conserve wildlife, while also providing veterinary care and rescue services.",
  "image": "wildlife-sos.png",
  "link": "http://wildlifesos.org/",
  "donationLink": "https://give.wildlifesos.org/page/16138/donate/1",
  "category": "Animal Welfare"
}

]