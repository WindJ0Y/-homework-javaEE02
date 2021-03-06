const Ajax = {
    get: function(url, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    },
    post: function (url, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
}

addStudent = function () {
    let name = document.getElementById("studentName").value;
    Ajax.get("./v1/addStudent?name=" + name,function (resp) {
        alert(resp);
        location.reload();
    })
}

addHomework = function () {
    let name = document.getElementById("homeworkName").value;
    Ajax.get("./v1/addHomework?name=" + name,function (resp) {
        alert(resp);
        location.reload();
    })
}

submitHomework = function () {
    let sid = document.getElementById("studentSelect").value;
    let hid = document.getElementById("homeworkSelect").value;
    let content = document.getElementById("homeworkContent").value;
    Ajax.get("./v1/submitHomework?sid=" + sid + "&hid=" + hid + "&content=" + content ,function (resp) {
        alert(resp);
        location.reload();
    })
}