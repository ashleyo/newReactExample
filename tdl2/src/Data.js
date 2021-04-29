import { GoogleSpreadsheet } from "google-spreadsheet";
//https://github.com/theoephraim/node-google-spreadsheet

// Config variables
const SPREADSHEET_ID = "1L4N9X_uOnk4uDg109RJiTyx6kAXHc2XXl27-KJqNymk";
const SHEET_ID = 0;
const CLIENT_EMAIL = "todotester@vast-arena-311208.iam.gserviceaccount.com";
const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtGw8HkH0wnf3/\n1lPOaEFf2mFXjLtJwrKqQ61hMop3en/cjLwznP1rEmNNa8f0EHvVkzKG15rZZo/G\nWrBx7r3Izz7fcKnfoO4sorFYdAczlgviRqfK+FLukh6yAkBAgGL5F4I1U529/SGN\nYGm/A3smDYpGAo97IbtdEIbQCYddVf+qOdqEaJXEYqVJpXcKJ31R4gZxMm4JlCcw\n6nKRWlB4Pc8qNGShhQL7tZtc5Jxo550Bi0Obv2Zy6cnrBoaty1/5yrTG0nMIdfLS\nVecX4TA1pqQBPZBAPkehT3PzuN2zOA+qDWhVUvZd/wI25ypsCphhlBg+HcAJsegN\nIUvWhHjNAgMBAAECggEAAMfF/SeXKjQfJmiJTan4bsI4wo9KW85AA5mo+JwIGhEO\neGuA8U2kkZBwtAg+mAXcBcXW7Tt9gbcZLgV3O7DDHvd0v7RbSk1MLyTa/mSQJwi2\nypzUtA4RCUyLDS6tXH+S0A2Dh3qtI6wp4/+XPtcd9xqs1WhKnNrtelH744aXe7Te\nFNkTxKHQPD0KJMcTBskAmEcAO+UvBntCeoGGEQFLuNuDTTZMwiUy5h6TFMmvJ6hg\n46LCCyPcl7V5b8ww5+ybhPesbpiDIifwEoA3DioXZk2b/vZqflAENGF1QvR4Hfrg\nPf6pqH0w/1w2iLipkYozpaVXAzeM8zuRgNT87QQKcQKBgQD9DRRqH1LWe561HRfu\nEYjUAoG697pqz/e7xE2hem9Ezttcr4dzIuyxFqM9wSwe/nJ8VxAOO7P+cj4QU1lb\nX/CUxedAD5Gn2prLJKYJHKmRc6YmyFxpgWieMNykSK42Q1lAwUwsXwtgcPvqWHd0\nPu4jmm0hoq+an4GkgHldgI9rqQKBgQDv3mjV783AMzoZsrkTefPohXxJ8ghGXZaU\nT73Mxf3V35uff7K89DnUvAFoJprr4FLlv5mk/Z/z0QYmFoerat6/O8gCiiAsjruk\nUBunKxZkxgpfqcseaRoMbljed6nFH0P5YdV2Q3zHA6xVfR0jHYA7kiSoVc7T6DG9\nqGUChPt6hQKBgHaB/aGFceIImtbu/Rn9FDtVwTOyeJc1Niu1TzXkhN+QkKLjgWem\nX3q/w0tUgDkzqKIak+ZWh4EON4qlvh9Q2vaRiC80G16kvgGM9EUoKzF3G8Tl6IFw\nnXIYJ/y4HP5EpDPzUp0lFcrgntms/KRwJE6AL8Ok0OB0+t3zXOMxJfmhAoGBAMdP\nz1y0/goOhuCDmTWNyBYVlMj8y9NsQIrMF7HncpwcSXum6CYJ6WPTNHgOW/xTUY6G\nPmzSMe6uaKWNYv4UtzG/wtoZW9KqZ1CJH/Ev5FOoG0aSF60VOAfMSRvR4sdgy2KU\n4IJ8YVocuz3t0CA1iy/0p3EYm9uIvIwTOJt3VF7hAoGAJLWeWBkkwHv1CT4daKBc\nGRd1AuIXFaRjKa1NwE/ZBlozeYwqyeVDLAuV0jguQzr4CBkbhzXsPsHhOXvC/xDW\nywaf39kK5bkKSQFgRH8BJ/rtR+0gkM10oLJc2HEBa8Q+UsqaGEdSbvT9414bPftS\n+qlp7t3jYI64M8aFCpoIFWk=\n-----END PRIVATE KEY-----\n";

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const openSheet = async () => {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();
    const data = doc.sheetsById[SHEET_ID];
    return data
  } catch (e) {
  console.error("Error: ", e);
  return null;
  }
}

let sheet = null;
const readRows = async () => {
  sheet = await openSheet();
  let rows =  await sheet.getRows();
  return rows;
}
/*
const addRow = async (row) => {
    const rows = await sheet.addRow(row);
    return rows
  };
*/

const Data = readRows();
export default Data; // exporting RO
