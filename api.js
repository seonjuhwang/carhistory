const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');
var cors = require('cors');

app.use(cors());
const server = app. listen(3001,()=> {
    console.log('Start Server : localhost:3001');
});

const key = {
    apiKey: 'JD78DPD-ZD5MVMF-KTPP5CV-Q7QK2YN',
    uuid: '934e86d9-fb4b-4dd1-9ead-62b3b9ef317a'
  };

app.get('/api/carnumber/:apikey/:type',async (req,res)=>{
    let{
        apikey,
        type
    } = req.params;

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){
        res.send('apikey is not valid');
    } 
    else{
         if(type == '1111'){
             let data = [
                {name:"전손 보험 사고", state:"1회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"3회",cash:"33,256,855원"},
                {name:"상대 차 피해", state:"2회",cash:"4,283,000원"},
                {name:"차량 번호 변경", state:"없음"},
                {name:"소유자 변경", state:"없음"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"있음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '3127'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"1회",cash:"623,850원"},
                {name:"상대 차 피해", state:"0회",cash:"0원"},
                {name:"차량 번호 변경", state:"없음"},
                {name:"소유자 변경", state:"없음"},
                {name:"대여 용도 사용 이력", state:"있음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '1147'){
            let data = [
                {name:"전손 보험 사고", state:"1회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"1회"},
                {name:"내 차 피해", state:"2회",cash:"27,356,225원"},
                {name:"상대 차 피해", state:"2회",cash:"13,265,548원"},
                {name:"차량 번호 변경", state:"없음"},
                {name:"소유자 변경", state:"없음"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"있음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '4531'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"1회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"2회",cash:"21,036,850원"},
                {name:"상대 차 피해", state:"1회",cash:"625,710원"},
                {name:"차량 번호 변경", state:"1회"},
                {name:"소유자 변경", state:"1회"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '3665'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"1회"},
                {name:"내 차 피해", state:"2회",cash:"986,527원"},
                {name:"상대 차 피해", state:"2회",cash:"655,810원"},
                {name:"차량 번호 변경", state:"1회"},
                {name:"소유자 변경", state:"1회"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '5566'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"1회",cash:"556,273원"},
                {name:"상대 차 피해", state:"1회",cash:"796,532원"},
                {name:"차량 번호 변경", state:"없음"},
                {name:"소유자 변경", state:"없음"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '8966'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"1회",cash:"115,960원"},
                {name:"상대 차 피해", state:"0회",cash:"0원"},
                {name:"차량 번호 변경", state:"1회"},
                {name:"소유자 변경", state:"1회"},
                {name:"대여 용도 사용 이력", state:"있음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '7412'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"1회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"1회",cash:"338,562원"},
                {name:"상대 차 피해", state:"0회",cash:"0원"},
                {name:"차량 번호 변경", state:"1회"},
                {name:"소유자 변경", state:"2회"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"있음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else if(type == '1256'){
            let data = [
                {name:"전손 보험 사고", state:"0회"},
                {name:"도난 보험 사고", state:"0회"},
                {name:"침수 보험 사고", state:"0회"},
                {name:"내 차 피해", state:"3회",cash:"28,657,120원"},
                {name:"상대 차 피해", state:"2회",cash:"13,256,855원"},
                {name:"차량 번호 변경", state:"없음"},
                {name:"소유자 변경", state:"1회"},
                {name:"대여 용도 사용 이력", state:"없음"},
                {name:"영업 용도 사용 이력", state:"없음"},
                {name:"관용 용도 사용 이력", state:"없음"}
            ];
            res.send(data);
        }
        else {
            res.send('Type is not correct.');
        }
    }
});