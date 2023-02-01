let a = prompt("Son tanlang :\n1.Tosh\n2.Qaychi\n3.Qog'oz")
b = Math.random()
d = 0
c = ""
e = ""
if (a == 3){
    e = "siz Qog'ozni tanladiz"
}else if(a == 1){
    e = "siz toshni tanladiz"
}else if (a == 2) {
    e = "siz qaychini tanladiz"
}else if(e!=1&&e!=2&&e!=3){
    e = "raqam tanlang 1, 2 va 3"
}
if(b<=0.34){
    c = 1
    c = "komp toshni tanladi"
}else if(b<=0.64){
    c = 2
    c = "komp qaychini tanladi"
}else{
    c = "komp qog'ozni tanladi"
}
function Jojo(k,l){
    if (k=="siz toshni tanladiz") {
        if (l=="komp qaychini tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz Qog'ozni tanladiz") {
        if (l=="komp toshni tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }else if (k=="siz qaychini tanladiz") {
        if (l=="komp qog'ozni tanladi") {
            return "Yutingiz"
        }else{
            return "Yutqazdiz"
        }
    }
    else{
        return "Mazgi bomadi"
    }
}
g = Jojo(e,c)
alert(e+"\n"+c+"\n"+g)