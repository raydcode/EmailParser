const string = document.getElementById('stringTextarea');
const emails = document.getElementById('emailTextarea');
const btn = document.getElementById('btn');
const count = document.getElementById('emailText');
const warning = document.getElementById('warning');

string.addEventListener('input', () => {
  warning.innerHTML = '';
});

const textToEmailParser = () => {
  if (string.value.length === 0) {
    warning.innerHTML = `Please enter a String `;
  } else {
    let rawString = string.value;
    let regex = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9._-]+)/gi;
    let validEmail = rawString.match(regex);

    let emailArray = [];

    for (let i = 0; i < validEmail.length; i++) {
      if (emailArray.indexOf(validEmail[i]) == -1) {
        emailArray.push(validEmail[i]);
      }
    }

    let finalEmails = emailArray.join(', ');

    count.innerHTML = `Emails you have ${emailArray.length}`;
    emails.textContent = finalEmails;
  }
};

btn.addEventListener('click', textToEmailParser);

// heloo email world real@email.com asddsa jldkjjlkj jkljl sdajlkdasjdsa kljadsj dklja real1@email.com real.test@email.com helllo hkjdshsdkjh jkh real-time@email.com
