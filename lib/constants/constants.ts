
export const navLinks = [
    { name: "Home", url: "/" },
    { name: "Sales Systems", url: "/sales-systems" },
    { name: "Job Seekers", url: "/job-seekers" },
    { name: "Real Estate", url: "/real-estate" },
    { name: "About Us", url: "/about-us" },
    // { name: "Blogs", url: "/blogs" },
  ];



export const footerLinks1 = [
  { name : "Technology & IT" },
  { name : "Software & Hardware"},
  { name : "Real Estate" , link:"/real-estate"},
  { name : "Marketing & Communications"},
  { name : "Healthcare"},
  { name : "Design & Media"},
  { name : "Services and Consultancy"},
  { name : "Legal"},
]


export const footerLinks2 = [
  { name : "Start-Ups"},
  { name : "Scale-Ups"},
  { name : "SMBs"},
  { name : "SMEs"},
  { name : "Enterprise"},
  { name : "Corporations"},
]








export function timeAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    const intervals: { [key: string]: number } = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    };

    for (const key in intervals) {
        const interval = Math.floor(seconds / intervals[key]);
        if (interval >= 1) {
            return rtf.format(-interval, key as Intl.RelativeTimeFormatUnit);
        }
    }

    return "just now";
}






