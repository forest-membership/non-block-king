import adjective from "@/service/nickname/adjective";
import noun from "@/service/nickname/noun";

const adj = adjective.filter((word, index) => adjective.indexOf(word) === index);
const name = noun.filter((word, index) => noun.indexOf(word) === index);

const selectAdj = () => adj[Math.floor(Math.random() * adj.length)];
const selectName = () => name[Math.floor(Math.random() * name.length)];

export default () => selectAdj() + " " + selectName();
