class Profile {
    constructor({ name, title, image, linkedIn, instagram, github, twitter }) {
        this.name = name;
        this.title = title;
        this.image = image;
        this.linkedIn = linkedIn;
        this.instagram = instagram;
        this.github = github;
        this.twitter = twitter;
    }
}


const Vedant = new Profile(
    "Vedant Jotangiya",
    "Managerial Lead",
    "./assets/team/vedant.png",
    "http://www.linkedin.com/in/vedantjot",
    "http://www.instagram.com/vedantjot",
    "http://github.com/vedantjot",
    "http://twitter.com/vedantjot",
)

const Neel = new Profile(
    "Neel Gorasiya",
    "Technical Lead",
    "./assets/team/neel.png",
    "https://www.linkedin.com/in/gorasiyaneel",
    "https://instagram.com/neelg_2904",
    "http://github.com/Neel2904",
    "http://twitter.com/Neel_2904",
)

const Ishita = new Profile(
    "Ishita Keshawani",
    "Executive Member",
    "./assets/team/ishita.png",
    "https://www.linkedin.com/in/ishitakeshawani",
    "https://instagram.com/ishitakeshawani",
    "http://github.com/ishitakeshawani",
    "http://twitter.com/ishitakeshawani",
)


const Miten = new Profile(
    "Miten Gajjar",
    "Executive Member",
    "./assets/team/Miten.png",
    "https://www.linkedin.com/in/mitengajjar/",
    "https://instagram.com/_.mi10._/",
    "http://github.com/GajjarMiten",
    "http://twitter.com/GajjarMiten",
)

const Aum = new Profile(
    "Aum Joshi",
    "Executive Member",
    "./assets/team/aum.png",
    "https://www.linkedin.com/in/aum-joshi",
    "https://instagram.com/aumjoshi_",
    "http://github.com/aumjoshi",
    "http://twitter.com/aumjoshi",
)


const Yashvi = new Profile(
    "Yashvi Patel",
    "Executive Member",
    "./assets/team/yashvi.png",
    "https://www.linkedin.com/in/patelyashvi",
    "https://instagram.com/yashviwithawhy/",
    "http://github.com/patelyashvi",
    "http://twitter.com/YashviP97470687",
)


const TeamList = [Vedant, Neel, Ishita, Miten, Aum, Yashvi]


export default TeamList;