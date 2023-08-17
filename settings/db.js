const mysql=require('mysql')

const conn=mysql.createConnection({
    host:'bcqp479udwqz62nmdf0v-mysql.services.clever-cloud.com',
    port:'3306',
    user:'uzdexamochtagwss',
    password:'xyuBgDdtI8GvV6TnKjhx',
    database:'bcqp479udwqz62nmdf0v'
})

conn.connect((error)=>{
    if(error){
        return console.log('Ошибка в подключении к БД');
    }else{
        return console.log('Подключение к БД прошло успешно');
    }
})

exports.module=conn