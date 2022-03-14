//blog//
type Author = {
    name:string,
    job: string,
    picture: string,
    reyting: (string | number)

}

let aftor: Author = {
    name: 'Olimjon',
    job:  'Writer',
    picture: 'Good man',
    reyting: ''
}


type Blog = {
    name: string,
    date: number,
    titlePictue: string,
    desc: string,
    author: Author
}


let blog: Blog = {
    name: 'Jurnal',
    date: 2022,
    titlePictue: 'Good',
    desc: 'Lorem ipsum dolor sit amet',
    author: {
        name: 'Olimjon',
        job:  'Writer',
        picture: 'Good man',
        reyting: ''
    }
} 

console.log(

);

//CAR//

// Машина объектини проектлаштириш лозим. Машинанинг русуми, давлат раками, ишлаб чикилган йили, босиб утган километри ва матори хакида малумотлар бор.

// Машина маторининг хам малумотлари бор:  

// Серия раками, от кучи, сарфлайдиган бензин хажми
type MotorInfo = {
    seriyaRaqami: number,
    otKuchi: number,
    benzinSarfi: string
}
let minfo: MotorInfo = {
    seriyaRaqami: 30,
    otKuchi: 321,
    benzinSarfi: '100/6'
}



type CarModel = {
    rusumi: string,
    raqami: (number | string) ,
    chiqganYili: number,
    probeg: number,
    mInfo: MotorInfo
}
let carModel: CarModel = {
    rusumi: 'Spark',
    raqami: '90|747 MMS',
    chiqganYili: 2022,
    probeg: 70,
    mInfo: {
        seriyaRaqami: 30,
        otKuchi: 321,
        benzinSarfi: '100/6'
    }
}


// Мактаб синфининг малумотларини хотирада саклаш керак, бунинг учун унинг объектини яратамиз.

// Мактаб хонасининг йуналиши (яни кайси фан хонасилиги, физика, математика ва х.к), укийдиган синф номи, шу синфнинг укувчилари исмлари (сатрдан иборат массив куринишида берилади) ва синф рахбари исми

let royxat: string[] = []
type Royxat: 

type Maktab = {
    xona: string,
    sinfNomi: string,
    royxat: string,
    raxbar: string 
}

let maktab: Maktab = {
    xona: 'ingliz tili',
    sinfNomi: '9-a',
    royxat: Royxat
    raxbar

}



export {}