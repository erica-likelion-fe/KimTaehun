document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
    
      const username = String(document.getElementById("username").value);
      const password = String(document.getElementById("password").value);
      const email = String(document.getElementById("email").value);

      if (allCorrectForm(username, password, email)) {
        alert("정보가 성공적으로 전송되었습니다!");
        console.log("정보가 성공적으로 전송되었습니다!");
        console.log(`아이디: ${username}`);
        console.log(`이메일: ${email}`);
      }
      else {
        if (!FillRequireField(username, password, email)){
            alert("아이디, 비밀번호, 이메일을 모두 입력해주세요.");
        }
        else if (!pwdLengthIsEnough(password)){
            alert("비밀번호는 최소 6자 이상이어야 합니다.");
        }
        else if (!pwdIncludeSpecialChar(password)){
            alert("비밀번호에는 다음 특수문자 중 하나 이상이 포함되어야 합니다: !, *, %, $, #, @, ?");
        }
      }
    
    });

    const FillRequireField = (uname, pwd, eml) => {
        return (uname && pwd && eml);
    } 

    const pwdLengthIsEnough = (pwd) => {
        return (pwd.length >= 6);
    }

    const pwdIncludeSpecialChar = (pwd) => {
        let specialChar = ["!", "*", "%", "$", "#", "@", "?"];
        let include = specialChar.some(specialChar => pwd.includes(specialChar));
        return include;
    }

    const allCorrectForm = (uname, pwd, eml) => {
        return (FillRequireField(uname, pwd, eml) 
            && pwdLengthIsEnough(pwd) 
            && pwdIncludeSpecialChar(pwd)); 
    }
  });