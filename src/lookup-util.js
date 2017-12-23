function qualifyName(grammar, name) {
	const base = grammar;
	let currentGrammar = grammar;
	while (currentGrammar != null && currentGrammar.wasUniquified) {
	  const qualifiedName = currentGrammar.name + "$" + name;
	  ruleInfo = base.rules[qualifiedName];
	  if (ruleInfo != null) {
	    return qualifiedName;
	  }
	  currentGrammar = currentGrammar.superGrammar;
	}
}

module.exports = {
	qualifyName
}