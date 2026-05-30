import homeIcon from "../assets/images/icon-home.svg";
import searchIcon from "../assets/images/icon-search.svg";
import archiveIcon from "../assets/images/icon-archive.svg";
import tagIcon from "../assets/images/icon-tag.svg";
import settingIcon from "../assets/images/icon-settings.svg";


export const tabs = [
    { tab: "Home", iconSource: homeIcon, altText: "Home Icon", pageLink: "/"},
    { tab: "Search", iconSource: searchIcon, altText: "Search Icon", pageLink: "/search"},
    { tab: "Archived", iconSource: archiveIcon, altText: "Archives", pageLink: "/archived"},
    { tab: "Tags", iconSource: tagIcon, altText: "Tags", pageLink: "/tags"},
    { tab: "Settings", iconSource: settingIcon, altText: "Settings", pageLink: "settings"},
];

export const sidetabs = [
    { src: homeIcon, title: "All Notes" },
    { src: archiveIcon, title: "Archived Notes" },
  ];