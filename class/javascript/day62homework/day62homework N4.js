// დაწერეთ პირობითი განცხადება, რომელიც ამოწმებს, არის თუ არა ადამიანის ასაკი 13 წელზე ნაკლები. თუ ასეა, დაბეჭდეთ „ბავშვი ხარ“; თუ ის 13-დან 19-მდეა,
// ბეჭდვა "შენ ხარ მოზარდი"; წინააღმდეგ შემთხვევაში დაბეჭდეთ „სრულწლოვანი ხარ“

let age = prompt("რამდენი წლის ხარ?")

if (age < 13) {
    alert("შენ ბავშვი ხარ")
} else if (age >= 13 & age <= 19) {
    alert("შენ ხარ მოზარდი")
} else {
    alert("შენ ხარ ახალგაზრდა")
}