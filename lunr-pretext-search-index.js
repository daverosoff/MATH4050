var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Dave Rosoff    Notes for Real Analysis, adapted from notes written by Andrew Phillips.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    Natural numbers and integers    There is a set , whose elements are called natural numbers , and a function , satisfying:  There is an element .  There is no such that .  The function is injective (this means that only if ).   Principle of induction  Suppose is a subset such that and if then . Then .   We call the successor function . Informally think of .      If and , there is a unique such that .    Let . Then and if , then , so by . Hence, if and , then for some , which is unique since is injective. Indeed, if , then , therefore .     We set , , and so on, so that .     We define a binary operation by  For all , .  For all , .      Observe that this is a recursive definition:     For all , we have .    Let . We will show that using induction . Indeed, for , we have , so . Now suppose . Then for , we have . This shows and the proof by induction is complete.      We define another operation by:   For all , .    For all , .       Explicitly, and so on.    Let .         If , then .     .     .     .    If , then .       Proof of item 5 only. Let . For , we have , so .  Now suppose and let , so that . Then , which shows so that .   Now we give the standard form of induction . Let be a statement about a natural number that is either true or false. If is true and if, whenever is true we also have is true, then is true for all .    If , we say is less than  , and write , if for some . We write if we only wish to assert that or .      Let .   We have , but .    If and , then , and similarly for .    If and , then .    Exactly one of or or is true.    We have if and only if .    We have if and only if .       Proof of 2. Suppose that and . Then we have and for some . Then with , so .  Proof of 4. First we will show that no more than one of the statements is true. Suppose first that . Then for some . Using the fact that for all , we find . Similarly, if then .  Now if and then and for some , so , but this implies , a contradiction. Similarly, if , then and . This shows at most one of the statements is true.  To show at most one of the statements is true, let's fix and let be the statement or or . If , then for some , so and we have established . Now, let's suppose that and that is true, meaning that or or .  Suppose first that . Then for some , so . This shows that , so is true in this case.  Suppose next that . Then , so and is true as before.  Finally, suppose that . Then for some . If , then , so is true. If , then for some and . This shows that , and therefore is true in this case as well.  We have shown that for all , which concludes the proof by induction.     The well-ordering principle   If is nonempty, then has a least element . That is, there exists such that for all .      The Integers    A relation on a set is a subset of the Cartesian product . If , we write or simply if the relation is understood. Sometimes we abuse notation and identify the equivalence operator with the relation .      A relation is called an equivalence relation if   It is reflexive : for all .    It is symmetric : If then for all .    It is transitive : If and then for all .        Let and let . Then observe: , so is an equivalence relation.     Let be a set. A collection of subsets of is called a partition of if each element of belongs to exactly one of the .    Notice that does not require the elements of a partition to be finite in number. In other words, we can partition a set into infinitely many parts.    Suppose is partitioned into the subsets . Then we have, for all , : . This is usually summarized by saying The parts of a partition are either equal or disjoint.   The converse is also true, namely, if is a collection of subsets of satisfying , then the are a partition of .    Suppose first that the partition . Then each element of has to belong to exactly one of the . Now suppose is an element of . Then, because belongs to exactly one of the , we must have . This shows that the satisfy .  On the other hand, suppose that are some subsets of satisfying . Then let ; it is enough to show that belongs to exactly one of the .      Let be an equivalence relation on a set . For each we define a subset , called the equivalence class of under . The set of all such equivalence classes is a partition of .    Suppose and for some . Then by definition we have and . Thus and hence . It follows that . Indeed, if , then also (because and is an equivalence relation). Thence because and finally this means that . It follows by a symmetric argument that . Hence .  This shows that for all , either or , which     "
},
{
  "id": "axiom-peano",
  "level": "2",
  "url": "section-1.html#axiom-peano",
  "type": "Axiom",
  "number": "1.1",
  "title": "",
  "body": "  There is a set , whose elements are called natural numbers , and a function , satisfying:  There is an element .  There is no such that .  The function is injective (this means that only if ).   Principle of induction  Suppose is a subset such that and if then . Then .   We call the successor function . Informally think of .   "
},
{
  "id": "prop-predecessors-are-unique",
  "level": "2",
  "url": "section-1.html#prop-predecessors-are-unique",
  "type": "Proposition",
  "number": "1.2",
  "title": "",
  "body": "  If and , there is a unique such that .    Let . Then and if , then , so by . Hence, if and , then for some , which is unique since is injective. Indeed, if , then , therefore .   "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Remark",
  "number": "1.3",
  "title": "",
  "body": " We set , , and so on, so that .  "
},
{
  "id": "def-addition",
  "level": "2",
  "url": "section-1.html#def-addition",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  We define a binary operation by  For all , .  For all , .     "
},
{
  "id": "prop-addition-associative",
  "level": "2",
  "url": "section-1.html#prop-addition-associative",
  "type": "Proposition",
  "number": "1.5",
  "title": "",
  "body": "  For all , we have .    Let . We will show that using induction . Indeed, for , we have , so . Now suppose . Then for , we have . This shows and the proof by induction is complete.   "
},
{
  "id": "def-multiplication",
  "level": "2",
  "url": "section-1.html#def-multiplication",
  "type": "Definition",
  "number": "1.6",
  "title": "",
  "body": "  We define another operation by:   For all , .    For all , .      "
},
{
  "id": "prop-more-field-axioms",
  "level": "2",
  "url": "section-1.html#prop-more-field-axioms",
  "type": "Proposition",
  "number": "1.7",
  "title": "",
  "body": "  Let .         If , then .     .     .     .    If , then .     "
},
{
  "id": "subsection-1-11",
  "level": "2",
  "url": "section-1.html#subsection-1-11",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Proof of item 5 only. Let . For , we have , so .  Now suppose and let , so that . Then , which shows so that .  "
},
{
  "id": "subsection-1-12",
  "level": "2",
  "url": "section-1.html#subsection-1-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form of induction "
},
{
  "id": "def-less-than",
  "level": "2",
  "url": "section-1.html#def-less-than",
  "type": "Definition",
  "number": "1.8",
  "title": "",
  "body": "  If , we say is less than  , and write , if for some . We write if we only wish to assert that or .   "
},
{
  "id": "prop-order-axioms",
  "level": "2",
  "url": "section-1.html#prop-order-axioms",
  "type": "Proposition",
  "number": "1.9",
  "title": "",
  "body": "  Let .   We have , but .    If and , then , and similarly for .    If and , then .    Exactly one of or or is true.    We have if and only if .    We have if and only if .       Proof of 2. Suppose that and . Then we have and for some . Then with , so .  Proof of 4. First we will show that no more than one of the statements is true. Suppose first that . Then for some . Using the fact that for all , we find . Similarly, if then .  Now if and then and for some , so , but this implies , a contradiction. Similarly, if , then and . This shows at most one of the statements is true.  To show at most one of the statements is true, let's fix and let be the statement or or . If , then for some , so and we have established . Now, let's suppose that and that is true, meaning that or or .  Suppose first that . Then for some , so . This shows that , so is true in this case.  Suppose next that . Then , so and is true as before.  Finally, suppose that . Then for some . If , then , so is true. If , then for some and . This shows that , and therefore is true in this case as well.  We have shown that for all , which concludes the proof by induction.   "
},
{
  "id": "thm-well-ordering",
  "level": "2",
  "url": "section-1.html#thm-well-ordering",
  "type": "Theorem",
  "number": "1.10",
  "title": "The well-ordering principle.",
  "body": " The well-ordering principle   If is nonempty, then has a least element . That is, there exists such that for all .   "
},
{
  "id": "def-relation",
  "level": "2",
  "url": "section-1.html#def-relation",
  "type": "Definition",
  "number": "1.11",
  "title": "",
  "body": "  A relation on a set is a subset of the Cartesian product . If , we write or simply if the relation is understood. Sometimes we abuse notation and identify the equivalence operator with the relation .   "
},
{
  "id": "def-equivalence-relation",
  "level": "2",
  "url": "section-1.html#def-equivalence-relation",
  "type": "Definition",
  "number": "1.12",
  "title": "",
  "body": "  A relation is called an equivalence relation if   It is reflexive : for all .    It is symmetric : If then for all .    It is transitive : If and then for all .      "
},
{
  "id": "subsec-the-integers-4",
  "level": "2",
  "url": "section-1.html#subsec-the-integers-4",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": " Let and let . Then observe: , so is an equivalence relation.  "
},
{
  "id": "def-partition-of-set",
  "level": "2",
  "url": "section-1.html#def-partition-of-set",
  "type": "Definition",
  "number": "1.14",
  "title": "",
  "body": "  Let be a set. A collection of subsets of is called a partition of if each element of belongs to exactly one of the .   "
},
{
  "id": "lem-partitions-parts-disjoint-equal",
  "level": "2",
  "url": "section-1.html#lem-partitions-parts-disjoint-equal",
  "type": "Lemma",
  "number": "1.15",
  "title": "",
  "body": "  Suppose is partitioned into the subsets . Then we have, for all , : . This is usually summarized by saying The parts of a partition are either equal or disjoint.   The converse is also true, namely, if is a collection of subsets of satisfying , then the are a partition of .    Suppose first that the partition . Then each element of has to belong to exactly one of the . Now suppose is an element of . Then, because belongs to exactly one of the , we must have . This shows that the satisfy .  On the other hand, suppose that are some subsets of satisfying . Then let ; it is enough to show that belongs to exactly one of the .   "
},
{
  "id": "fact-equivalence-relations-partition",
  "level": "2",
  "url": "section-1.html#fact-equivalence-relations-partition",
  "type": "Fact",
  "number": "1.16",
  "title": "",
  "body": "  Let be an equivalence relation on a set . For each we define a subset , called the equivalence class of under . The set of all such equivalence classes is a partition of .    Suppose and for some . Then by definition we have and . Thus and hence . It follows that . Indeed, if , then also (because and is an equivalence relation). Thence because and finally this means that . It follows by a symmetric argument that . Hence .  This shows that for all , either or , which   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
