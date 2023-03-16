let div = document.getElementById("info"); //Возвращает ссылку на элемент по его идентификатору

let obj1 = {
    countries: Object.assign([], countries),
    outCountries: function() {
        let arr1 = countries.map(function(element){
            let firstAbout, secondAbout, thirdAbout, fourthAbout, fifthAbout, number, field, arr, objectField; //переменные не инициализированны т.е undefined
            for (let i in element) {
                if (typeof element[i] === 'string') {
                    if (firstAbout === undefined) firstAbout = element[i];
                    else if (secondAbout === undefined) secondAbout = element[i];
                    else if (thirdAbout === undefined) thirdAbout = element[i];
                    else if (fourthAbout === undefined) fourthAbout = element[i];
                    else fifthAbout = element[i];
                }
                else if (typeof element[i] === 'number') {
                    number = element[i];
                }
                else if (Array.isArray(element[i]) && !Array.isArray(element[i][0])) {
                    field = element[i];
                    //Array.isArray()
                }
                else if (Array.isArray(element[i]) && Array.isArray(element[i][0])) {
                    let temp_arr = [];
                    for (let j in element[i]) {
                        let str = "";
                        let next = 0;
                        for (let k = 0; k < element[i][j].length; k++) {
                            str += " ";
                            next++;
                            str += element[i][j][k];
                        }
                        temp_arr[j] = str;
                    }
                    arr = temp_arr;
                }
                else if (typeof element[i] === "object") {
                    objectField = element[i];
                }
            }
            let temp = [firstAbout, secondAbout, thirdAbout, fourthAbout, number, fifthAbout, field, arr, objectField];
            return temp;
        });

        function makeTableFromCountry(element) {  //Создание табличной формы
            let string = '<table border="0" style="text-align: center">' +
            "<tr><td><b>" + about[0] + "</b></td><td>" + element[0] + "</td></tr>" +
            "<tr><td><b>" + about[1] + "</b></td><td>" + element[1] + "</td></tr>" +
            "<tr><td><b>" + about[2] + "</b></td><td>" + element[2] + "</td></tr>" +
            "<tr><td><b>" + about[3] + "</b></td><td>" + element[3] + "</td></tr>" +
            "<tr><td><b>" + about[4] + "</b></td><td>" + element[4] + "</td></tr>" +
            "<tr><td><b>" + about[5] + "</b></td><td>" + element[5] + "</td></tr>" +
            "<tr><td><b>" + about[6] + "</b></td><td>";
            for (let i in element[6]) 
                string += element[6][i] + "<br>";
            string += "</td></tr><tr><td><b>" + about[7] + "</b></td><td>";
            for (let i in element[7]) 
                string += element[7][i] + "<br>";
            string += "</td></tr><tr><td><b>" + about[8];
            string += "<td>";
            for (let k in element[8]) 
                string += element[8][k] + " " + k + ";<br> ";
            string +="</td>";
            string += "<hr>" + "</b></td></tr></table>";
            div.innerHTML += string;
        }

        arr1.forEach(function(element){
            makeTableFromCountry(element);
        });
    }
}

function Changes(){
    this.countries = Object.assign([], countries),
    this.changeCountries = 
    function(data){
        let temp = this.countries.map(function(element, index, arr){
            for (let i in element){
                if (Array.isArray(element[i]) && !Array.isArray(element[i][0])){
                   if (data == 0) {
                     element[i].sort();
                     element[i].reverse();
                   }
                   else if (data == 1){
                    element[i].sort();
                   }
                }
            }
        })
        this.countries = temp;
    }
};

obj2 = new Changes(); 

let data = 1; 
 //вывод обЪекта1
//obj1.outCountries();
 //вывод объекта2
obj2.changeCountries.call(obj1, data);
obj1.outCountries();