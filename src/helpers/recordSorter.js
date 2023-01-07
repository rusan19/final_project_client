import moment from "moment";

export const recordSorter = (value, record) => {
  if (value === "daily") {
    return console.log("daily");
  } else if (value === "monthly") {
    const groups = {};
    record.forEach((object) => {
      const month = moment(object.dateTime).month();
      if (!groups[month]) {
        groups[month] = [];
      }
      groups[month].push(object);
    });
    return console.log(groups);
  }
};
