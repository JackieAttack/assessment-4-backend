const posted = [];
let id = 0;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A dubious friend may be an enemy in camouflage.",
         "A hunch is creativity trying to tell you something.",
         "A smile is your personal welcome mat.",
         "A soft voice may be awfully persuasive.",
         "Chance favors those in motion."]

         let randomIndex = Math.floor(Math.random() * fortunes.length);
         let randomFortune = fortunes[randomIndex];
       
         res.status(200).send(randomFortune);
    },

    postBoard: (req, res) => {
        const newPost = {...req.body, id}
        posted.push(newPost)
        res.status(200).send(posted)
        id++
    },

    deletePost: (req, res) => {
        const {btnId} = req.params
        let index = btnId[btnId.length - 1]
        index = +index

        console.log(index)
        for(i = 0; i < posted.length; i++) {
            if(posted[i].id === index) {
                posted.splice(i, 1)
                break;
            }
        }
        res.status(200).send(posted)
    }
}