var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "M4050-2",
  "level": "1",
  "url": "M4050-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Dave Rosoff    Notes for Real Analysis, adapted from notes written by Andrew Phillips.   "
},
{
  "id": "sec-construction-reals",
  "level": "1",
  "url": "sec-construction-reals.html",
  "type": "Section",
  "number": "1",
  "title": "The Construction of the Real Numbers",
  "body": " The Construction of the Real Numbers   We have to start from somewhere, but assuming as little as we can, we'll generate the real numbers out of just the natural numbers and some basic mathematical constructs.    The natural numbers    There is a set , whose elements are called natural numbers , and a function , satisfying:  There is an element .  There is no such that .  The function is injective (this means that only if ).   Principle of induction  Suppose is a subset such that and if then . Then .   We call the successor function . Informally think of .      If and , there is a unique such that .    Let . Then and if , then , so by . Hence, if and , then for some , which is unique since is injective. Indeed, if , then , therefore .     We set , , and so on, so that .     We define a binary operation by  For all , .  For all , .      Observe that this is a recursive definition:     For all , we have .    Let . We will show that using induction . Indeed, for , we have , so . Now suppose . Then for , we have . This shows and the proof by induction is complete.      We define another operation by:   For all , .    For all , .       Explicitly, and so on.    Let .    .    If , then .     .     .     .    If , then .        Items 1 4 and 6 are left to the reader. Items 2 and 6 appear on as and .  Proof of only. Let . For , we have , so .  Now suppose and let , so that . Then , which shows so that .   Now we give the standard form of induction . Let be a statement about a natural number that is either true or false. If is true and if, whenever is true we also have is true, then is true for all .    If , we say is less than  , and write , if for some . We write if we only wish to assert that or .      Let .   We have , but .    If and , then , and similarly for .    If and , then .    Exactly one of or or is true.    We have if and only if .    We have if and only if .       Items 1, 3, 5, and 6 are left to the reader. appears on as .  Proof of 2. Suppose that and . Then we have and for some . Then with , so .  Proof of 4. First we will show that no more than one of the statements is true. Suppose first that . Then for some . says that for all . Thus, we find . Similarly, if then .  Now if and then and for some , so , but this implies , a contradiction. Similarly, if , then and . This shows at most one of the statements is true.  To show at most one of the statements is true, let's fix and let be the statement or or . If , then for some , so and we have established . Now, let's suppose that and that is true, meaning that or or .  Suppose first that . Then for some , so . This shows that , so is true in this case.  Suppose next that . Then , so and is true as before.  Finally, suppose that . Then for some . If , then , so is true. If , then for some and . This shows that , and therefore is true in this case as well.  We have shown that for all , which concludes the proof by induction.      The successor function has no fixed point, that is, for all we have .    Left to the reader ( ).      For all , we have .    Left to the reader ( ).     The well-ordering principle   If is nonempty, then has a least element . That is, there exists such that for all .      The integers    A relation on a set is a subset of the Cartesian product . If , we write or simply if the relation is understood. Sometimes we abuse notation and identify the equivalence operator with the relation .      A relation is called an equivalence relation if   It is reflexive : for all .    It is symmetric : If then for all .    It is transitive : If and then for all .        Let and let . Then observe: , so is an equivalence relation.     Let be a set. A collection of subsets of is called a partition of if each element of belongs to exactly one of the .    Notice that does not require the elements of a partition to be finite in number. In other words, we can partition a set into infinitely many parts.    Suppose is partitioned into the subsets . Then we have, for all , : . This is usually summarized by saying The parts of a partition are either equal or disjoint.   The converse is also true, namely, if is a collection of subsets of satisfying and , then the are a partition of .    Suppose first that the partition . Then each element of has to belong to exactly one of the . Now suppose is an element of . Then, because belongs to exactly one of the , we must have . This shows that the satisfy .  On the other hand, suppose that are some subsets of satisfying . Then let ; it is enough to show that belongs to exactly one of the . If we suppose belongs to two of the , say and , then by we have at once that . So cannot belong to more than one of the . On the other hand, the union of the is equal to , hence it certainly contains , which means that belongs to at least one of the .  Thus we have shown that belongs to exactly one of the , and so the are a partition of , as required.      Let be an equivalence relation on a set . For each we define a subset , called the equivalence class of under . The set of all such equivalence classes is a partition of .    We proceed according to and show that the equivalence classes satisfy and that their union is .  Suppose and for some . Then by definition we have and . Thus and hence . It follows that . Indeed, if , then also (because and is an equivalence relation). Thence because and finally this means that . It follows by a symmetric argument that . Hence .  This shows that for all , either or , which is the content of .  To see that the union of the equivalence classes is , we just notice that each is certainly a member of its own equivalence class , because is an equivalence relation. This concludes the proof.     For the equivalence relation on the set of , namely , we have the following equivalence classes: . The partition of associated to the equivalence relation is .   Equivalence relations are a powerful method of constructing new sets from old. We can look at the set of equivalence classes as a new mathematical object. This is illustrated in diabolically clever fashion by .    We define a relation on the set by .  This looks strange, but it is concocted quite precisely. We are trying to construct the negative integers out of thin air. The idea is to represent a number like as the class of all pairs where . It's the idea of being three less than something.      The relation is an equivalence relation.    Let . Then , so we have . Thus the relation is reflexive.  Next let us suppose that for some . Then . It follows that , so . Thus the relation is symmetric.  Finally, let us suppose that and for some . Then and . Adding, we find from which it follows at once that and the relation is transitive.      The set of integers , denoted , is the set of equivalence classes of in the set .  That is, . We define the elements and by .    Having defined the integers, it's now our duty to give them their familiar operations and show that these extend the operations on . This is done in a standard way below.    We define the operation by This definition requires a short proof to be valid. So it is only provisional for now.    For to be valid, we have to show that the right-hand side of doesn't depend on our choices of . If we let those numbers vary within their equivalence classes, the right-hand-side must not change. When this is established, we say that addition of integers is well-defined .    Let's suppose that , so that is another member of the equivalence class . Similarly, let's take so that . Then it doesn't matter which we use to compute , because .    Since and , we have . Adding, we find , which means that , as required.      Define negation  by   Define subtraction  by .      The operations of are well-defined.    Left to the reader.      Let . Then    .     .     .     .       Left to the reader ( ).      Define multiplication by .      Multiplication is well-defined and satisfies the following for all .                       If then either or .       Left to the reader (see ).      For , define if , that is, if for some .      Define the function by . Then it satisfies the following.   The function is injective.     .     .    For we have , , and if and only if .       For , suppose that . Then . This means, by definition, that , whence .  For , observe that .  For , choose . We'll show that . Indeed, we have for some . Therefore, Conversely, suppose now that . Then .    We use to think of as a particular subset of and we also write     The rational numbers  We'll construct the rational numbers from the integers in almost the same way we constructed the integers from the rationals: using the machinery of equivalence classes.    Let . Define a relation on by . Informally, we think of as representing the quotient .      The relation of is an equivalence relation.    Left to the reader.      The set of rational numbers , denoted , is the set of equivalence classes of the relation of in . We define special elements by .         For , we have .    For , we have .          Suppose . Then , so by definition . Conversely, if , then , so .    Suppose . Then , so by definition and so . COnversely, if , then of course we also have and so .         Define addition by .  Define negation by .  Define subtraction by .         Addition and negation are well-defined.    For all we have    .     .     .     .          Proof of 2. Let . Then .      Define multiplication by . Define . Define inversion by .         Multiplication and inversion are well-defined.    Let . Then    .     .    If then .     .     .          Proof of 3. Let , so that . Then since .      For , define if       For , we have if and only if .    Suppose . Since , we have either . Hence, and . In both cases, .  Now suppose . Then both and or and . If then . On the other hand, if , then . This concludes the proof.      Define the inclusion function by .      The inclusion function of has the following properties.   The functionn is injective.    We have and .    If , then             We have if and only if .          For 1, we observe that if , so that , then by definition we have , so . Thus is injective.  For 2, we simply compute and similarly for .  The proof of 3 is left to the reader.      Define division by . We extend the mapping to all of by defining for all .      Division is well-defined.    Left to the reader.    We use to think of as a subset of and write for . We also write for when , .    The real numbers    For any , define its absolute value  by .      Let .   We have , with if and only if .     .    When , we have .    (The triangle inequality) .    (The reverse triangle inequality) .       Proof of 4: We have and , so . On the other hand, we also have , so that . Therefore , and the result follows from 3.     The archimedean property of the real numbers   For all , there exists such that .    Left to the reader.      A sequence of rational numbers is a function . We write instead of .          is a sequence with values .    Define a sequence by . We will see later that this sequence (among many others) converges to , so we will eventually need a bigger number system.         Let be a sequence of rational numbers. We call a Cauchy sequence , for each rational , there exists such that for all .      The sequence with terms is not Cauchy, because we can choose and then for all there exist such that which is not less than .      The sequence is Cauchy. Let be rational. Then choose . Then , so is a Cauchy sequence.      Let be the set of all Cauchy sequences of rational numbers and define a relation on by if, for all rational , there is such that for all .      The relation is an equivalence relation.    Let and let . Since for all , we see that . Next suppose , so that there exists such that . Then , so .  Finally, suppose that and . Then there are , such that . Therefore, for all , we have . So, , as required.      The set of real numbers , denoted , is the set of equivalence classes of in , where is the relation of .      A sequence all of whose terms are equal is Cauchy.      There is an injective function defined by where denotes the constant sequence with value .    Suppose for some . Then by definition we have . This means that for all , we have . This implies , for if not, then , in which case , a contradiction.    We use the mapping to view as a subset of and we simply write for where is rational.    Let and be sequences of rational numbers. Then the sum of and is the sequence whose terms are , and the product of and is the sequence whose terms are .      If , then so are and .    Left to the reader.      Let , so and for some . We define .      Suppose . Then for every , there exist such that . Then for all we have , so .      If and , then there is a Cauchy sequence representing , a rational number , and such that for all .    Since , there exists such that for all , there is with .  At the same time, because is Cauchy, there is with for all . In particular, there is such that and for all with .      If is a real number, there is a real number such that .    Let's write and use to get and such that for all . Now define a sequence by for all and for . Now let . Since is Cauchy, there exists such that . Now, suppose that . Then , whence and , so .  Next, for , we have and for , . Now we will prove that the sequence whose terms are is equivalent to . Indeed, let . Then for all , we have .  This shows that where .      For , we write or for the unique satisfying .      We define the operation of division by for real numbers , where .  We also define negation by and subtraction by .    All the usual algebraic rules can be proved to hold for this construction of the real numbers. For example, if and , then .    We say is positive and write if for some Cauchy sequence such that there exists rational and such that for all .  For , we write if .  We say is negative if for some Cauchy sequence such that there exists rational and such that for all .         For every , exactly one of the following is true: , , or .    We have if and only if .    If then and .    If then .    Suppose that is a Cauchy sequence and for for some . Then .       To prove (a), , then and there exist and as in . Since is Cauchy, there are two possibilities. There is some such that either   for all , we have , or    for all , we have .   Indeed, if this isn't the case, then there exist such that and Then, in either case, , which contradicts being Cauchy. In case 1 we have and in case 2 we have .  To prove (e), we suppose that . Then there is a rational number and such that and for all , for some . Now, for , we then have so that , contradicting the assumption that . Therefore .     "
},
{
  "id": "axiom-peano",
  "level": "2",
  "url": "sec-construction-reals.html#axiom-peano",
  "type": "Axiom",
  "number": "1",
  "title": "",
  "body": "  There is a set , whose elements are called natural numbers , and a function , satisfying:  There is an element .  There is no such that .  The function is injective (this means that only if ).   Principle of induction  Suppose is a subset such that and if then . Then .   We call the successor function . Informally think of .   "
},
{
  "id": "prop-predecessors-are-unique",
  "level": "2",
  "url": "sec-construction-reals.html#prop-predecessors-are-unique",
  "type": "Proposition",
  "number": "2",
  "title": "",
  "body": "  If and , there is a unique such that .    Let . Then and if , then , so by . Hence, if and , then for some , which is unique since is injective. Indeed, if , then , therefore .   "
},
{
  "id": "subsec-naturals-4",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-naturals-4",
  "type": "Remark",
  "number": "3",
  "title": "",
  "body": " We set , , and so on, so that .  "
},
{
  "id": "def-addition",
  "level": "2",
  "url": "sec-construction-reals.html#def-addition",
  "type": "Definition",
  "number": "4",
  "title": "",
  "body": "  We define a binary operation by  For all , .  For all , .     "
},
{
  "id": "prop-addition-associative",
  "level": "2",
  "url": "sec-construction-reals.html#prop-addition-associative",
  "type": "Proposition",
  "number": "5",
  "title": "",
  "body": "  For all , we have .    Let . We will show that using induction . Indeed, for , we have , so . Now suppose . Then for , we have . This shows and the proof by induction is complete.   "
},
{
  "id": "def-multiplication",
  "level": "2",
  "url": "sec-construction-reals.html#def-multiplication",
  "type": "Definition",
  "number": "6",
  "title": "",
  "body": "  We define another operation by:   For all , .    For all , .      "
},
{
  "id": "prop-more-field-axioms",
  "level": "2",
  "url": "sec-construction-reals.html#prop-more-field-axioms",
  "type": "Proposition",
  "number": "7",
  "title": "",
  "body": "  Let .    .    If , then .     .     .     .    If , then .      "
},
{
  "id": "subsec-naturals-11",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-naturals-11",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " Items 1 4 and 6 are left to the reader. Items 2 and 6 appear on as and .  Proof of only. Let . For , we have , so .  Now suppose and let , so that . Then , which shows so that .  "
},
{
  "id": "subsec-naturals-12",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-naturals-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "standard form of induction "
},
{
  "id": "def-less-than",
  "level": "2",
  "url": "sec-construction-reals.html#def-less-than",
  "type": "Definition",
  "number": "8",
  "title": "",
  "body": "  If , we say is less than  , and write , if for some . We write if we only wish to assert that or .   "
},
{
  "id": "prop-order-axioms",
  "level": "2",
  "url": "sec-construction-reals.html#prop-order-axioms",
  "type": "Proposition",
  "number": "9",
  "title": "",
  "body": "  Let .   We have , but .    If and , then , and similarly for .    If and , then .    Exactly one of or or is true.    We have if and only if .    We have if and only if .       Items 1, 3, 5, and 6 are left to the reader. appears on as .  Proof of 2. Suppose that and . Then we have and for some . Then with , so .  Proof of 4. First we will show that no more than one of the statements is true. Suppose first that . Then for some . says that for all . Thus, we find . Similarly, if then .  Now if and then and for some , so , but this implies , a contradiction. Similarly, if , then and . This shows at most one of the statements is true.  To show at most one of the statements is true, let's fix and let be the statement or or . If , then for some , so and we have established . Now, let's suppose that and that is true, meaning that or or .  Suppose first that . Then for some , so . This shows that , so is true in this case.  Suppose next that . Then , so and is true as before.  Finally, suppose that . Then for some . If , then , so is true. If , then for some and . This shows that , and therefore is true in this case as well.  We have shown that for all , which concludes the proof by induction.   "
},
{
  "id": "lem-successor-fixpoint-free",
  "level": "2",
  "url": "sec-construction-reals.html#lem-successor-fixpoint-free",
  "type": "Lemma",
  "number": "10",
  "title": "",
  "body": "  The successor function has no fixed point, that is, for all we have .    Left to the reader ( ).   "
},
{
  "id": "lem-addition-not-nilpotent",
  "level": "2",
  "url": "sec-construction-reals.html#lem-addition-not-nilpotent",
  "type": "Lemma",
  "number": "11",
  "title": "",
  "body": "  For all , we have .    Left to the reader ( ).   "
},
{
  "id": "thm-well-ordering",
  "level": "2",
  "url": "sec-construction-reals.html#thm-well-ordering",
  "type": "Theorem",
  "number": "12",
  "title": "The well-ordering principle.",
  "body": " The well-ordering principle   If is nonempty, then has a least element . That is, there exists such that for all .   "
},
{
  "id": "def-relation",
  "level": "2",
  "url": "sec-construction-reals.html#def-relation",
  "type": "Definition",
  "number": "13",
  "title": "",
  "body": "  A relation on a set is a subset of the Cartesian product . If , we write or simply if the relation is understood. Sometimes we abuse notation and identify the equivalence operator with the relation .   "
},
{
  "id": "def-equivalence-relation",
  "level": "2",
  "url": "sec-construction-reals.html#def-equivalence-relation",
  "type": "Definition",
  "number": "14",
  "title": "",
  "body": "  A relation is called an equivalence relation if   It is reflexive : for all .    It is symmetric : If then for all .    It is transitive : If and then for all .      "
},
{
  "id": "ex-equiv-rel-01",
  "level": "2",
  "url": "sec-construction-reals.html#ex-equiv-rel-01",
  "type": "Example",
  "number": "15",
  "title": "",
  "body": " Let and let . Then observe: , so is an equivalence relation.  "
},
{
  "id": "def-partition-of-set",
  "level": "2",
  "url": "sec-construction-reals.html#def-partition-of-set",
  "type": "Definition",
  "number": "16",
  "title": "",
  "body": "  Let be a set. A collection of subsets of is called a partition of if each element of belongs to exactly one of the .   "
},
{
  "id": "lem-partitions-parts-disjoint-equal",
  "level": "2",
  "url": "sec-construction-reals.html#lem-partitions-parts-disjoint-equal",
  "type": "Lemma",
  "number": "17",
  "title": "",
  "body": "  Suppose is partitioned into the subsets . Then we have, for all , : . This is usually summarized by saying The parts of a partition are either equal or disjoint.   The converse is also true, namely, if is a collection of subsets of satisfying and , then the are a partition of .    Suppose first that the partition . Then each element of has to belong to exactly one of the . Now suppose is an element of . Then, because belongs to exactly one of the , we must have . This shows that the satisfy .  On the other hand, suppose that are some subsets of satisfying . Then let ; it is enough to show that belongs to exactly one of the . If we suppose belongs to two of the , say and , then by we have at once that . So cannot belong to more than one of the . On the other hand, the union of the is equal to , hence it certainly contains , which means that belongs to at least one of the .  Thus we have shown that belongs to exactly one of the , and so the are a partition of , as required.   "
},
{
  "id": "prop-equivalence-relations-partition",
  "level": "2",
  "url": "sec-construction-reals.html#prop-equivalence-relations-partition",
  "type": "Proposition",
  "number": "18",
  "title": "",
  "body": "  Let be an equivalence relation on a set . For each we define a subset , called the equivalence class of under . The set of all such equivalence classes is a partition of .    We proceed according to and show that the equivalence classes satisfy and that their union is .  Suppose and for some . Then by definition we have and . Thus and hence . It follows that . Indeed, if , then also (because and is an equivalence relation). Thence because and finally this means that . It follows by a symmetric argument that . Hence .  This shows that for all , either or , which is the content of .  To see that the union of the equivalence classes is , we just notice that each is certainly a member of its own equivalence class , because is an equivalence relation. This concludes the proof.   "
},
{
  "id": "subsec-integers-9",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-integers-9",
  "type": "Example",
  "number": "19",
  "title": "",
  "body": " For the equivalence relation on the set of , namely , we have the following equivalence classes: . The partition of associated to the equivalence relation is .  "
},
{
  "id": "def-defining-relation-minus",
  "level": "2",
  "url": "sec-construction-reals.html#def-defining-relation-minus",
  "type": "Definition",
  "number": "20",
  "title": "",
  "body": "  We define a relation on the set by .  This looks strange, but it is concocted quite precisely. We are trying to construct the negative integers out of thin air. The idea is to represent a number like as the class of all pairs where . It's the idea of being three less than something.   "
},
{
  "id": "prop-minus-relation-equiv-relation",
  "level": "2",
  "url": "sec-construction-reals.html#prop-minus-relation-equiv-relation",
  "type": "Proposition",
  "number": "21",
  "title": "",
  "body": "  The relation is an equivalence relation.    Let . Then , so we have . Thus the relation is reflexive.  Next let us suppose that for some . Then . It follows that , so . Thus the relation is symmetric.  Finally, let us suppose that and for some . Then and . Adding, we find from which it follows at once that and the relation is transitive.   "
},
{
  "id": "def-integers",
  "level": "2",
  "url": "sec-construction-reals.html#def-integers",
  "type": "Definition",
  "number": "22",
  "title": "",
  "body": "  The set of integers , denoted , is the set of equivalence classes of in the set .  That is, . We define the elements and by .   "
},
{
  "id": "def-addition-integers",
  "level": "2",
  "url": "sec-construction-reals.html#def-addition-integers",
  "type": "Definition",
  "number": "23",
  "title": "",
  "body": "  We define the operation by This definition requires a short proof to be valid. So it is only provisional for now.   "
},
{
  "id": "prop-addition-integers-well-defined",
  "level": "2",
  "url": "sec-construction-reals.html#prop-addition-integers-well-defined",
  "type": "Proposition",
  "number": "24",
  "title": "",
  "body": "  Let's suppose that , so that is another member of the equivalence class . Similarly, let's take so that . Then it doesn't matter which we use to compute , because .    Since and , we have . Adding, we find , which means that , as required.   "
},
{
  "id": "def-negation-subtraction-integers",
  "level": "2",
  "url": "sec-construction-reals.html#def-negation-subtraction-integers",
  "type": "Definition",
  "number": "25",
  "title": "",
  "body": "  Define negation  by   Define subtraction  by .   "
},
{
  "id": "prop-neg-sub-integers-well-defined",
  "level": "2",
  "url": "sec-construction-reals.html#prop-neg-sub-integers-well-defined",
  "type": "Proposition",
  "number": "26",
  "title": "",
  "body": "  The operations of are well-defined.    Left to the reader.   "
},
{
  "id": "prop-properties-of-addition-integers",
  "level": "2",
  "url": "sec-construction-reals.html#prop-properties-of-addition-integers",
  "type": "Proposition",
  "number": "27",
  "title": "",
  "body": "  Let . Then    .     .     .     .       Left to the reader ( ).   "
},
{
  "id": "def-multiplication-integers",
  "level": "2",
  "url": "sec-construction-reals.html#def-multiplication-integers",
  "type": "Definition",
  "number": "28",
  "title": "",
  "body": "  Define multiplication by .   "
},
{
  "id": "prop-mul-integers-well-defined-properties",
  "level": "2",
  "url": "sec-construction-reals.html#prop-mul-integers-well-defined-properties",
  "type": "Proposition",
  "number": "29",
  "title": "",
  "body": "  Multiplication is well-defined and satisfies the following for all .                       If then either or .       Left to the reader (see ).   "
},
{
  "id": "def-integer-less-than",
  "level": "2",
  "url": "sec-construction-reals.html#def-integer-less-than",
  "type": "Definition",
  "number": "30",
  "title": "",
  "body": "  For , define if , that is, if for some .   "
},
{
  "id": "prop-natural-integer-inclusion",
  "level": "2",
  "url": "sec-construction-reals.html#prop-natural-integer-inclusion",
  "type": "Proposition",
  "number": "31",
  "title": "",
  "body": "  Define the function by . Then it satisfies the following.   The function is injective.     .     .    For we have , , and if and only if .       For , suppose that . Then . This means, by definition, that , whence .  For , observe that .  For , choose . We'll show that . Indeed, we have for some . Therefore, Conversely, suppose now that . Then .   "
},
{
  "id": "def-rational-equiv-classes",
  "level": "2",
  "url": "sec-construction-reals.html#def-rational-equiv-classes",
  "type": "Definition",
  "number": "32",
  "title": "",
  "body": "  Let . Define a relation on by . Informally, we think of as representing the quotient .   "
},
{
  "id": "prop-rational-equiv-eq-rel",
  "level": "2",
  "url": "sec-construction-reals.html#prop-rational-equiv-eq-rel",
  "type": "Proposition",
  "number": "33",
  "title": "",
  "body": "  The relation of is an equivalence relation.    Left to the reader.   "
},
{
  "id": "def-rational-numbers",
  "level": "2",
  "url": "sec-construction-reals.html#def-rational-numbers",
  "type": "Definition",
  "number": "34",
  "title": "",
  "body": "  The set of rational numbers , denoted , is the set of equivalence classes of the relation of in . We define special elements by .   "
},
{
  "id": "prop-recognizing-rational-zero-and-one",
  "level": "2",
  "url": "sec-construction-reals.html#prop-recognizing-rational-zero-and-one",
  "type": "Proposition",
  "number": "35",
  "title": "",
  "body": "     For , we have .    For , we have .          Suppose . Then , so by definition . Conversely, if , then , so .    Suppose . Then , so by definition and so . COnversely, if , then of course we also have and so .      "
},
{
  "id": "def-rational-operations",
  "level": "2",
  "url": "sec-construction-reals.html#def-rational-operations",
  "type": "Definition",
  "number": "36",
  "title": "",
  "body": "  Define addition by .  Define negation by .  Define subtraction by .   "
},
{
  "id": "prop-rational-addition-properties",
  "level": "2",
  "url": "sec-construction-reals.html#prop-rational-addition-properties",
  "type": "Proposition",
  "number": "37",
  "title": "",
  "body": "     Addition and negation are well-defined.    For all we have    .     .     .     .          Proof of 2. Let . Then .   "
},
{
  "id": "def-rational-multiplication",
  "level": "2",
  "url": "sec-construction-reals.html#def-rational-multiplication",
  "type": "Definition",
  "number": "38",
  "title": "",
  "body": "  Define multiplication by . Define . Define inversion by .   "
},
{
  "id": "prop-rational-multiplication-properties",
  "level": "2",
  "url": "sec-construction-reals.html#prop-rational-multiplication-properties",
  "type": "Proposition",
  "number": "39",
  "title": "",
  "body": "     Multiplication and inversion are well-defined.    Let . Then    .     .    If then .     .     .          Proof of 3. Let , so that . Then since .   "
},
{
  "id": "def-rational-order",
  "level": "2",
  "url": "sec-construction-reals.html#def-rational-order",
  "type": "Definition",
  "number": "40",
  "title": "",
  "body": "  For , define if    "
},
{
  "id": "prop-rationals-positive-recognition",
  "level": "2",
  "url": "sec-construction-reals.html#prop-rationals-positive-recognition",
  "type": "Proposition",
  "number": "41",
  "title": "",
  "body": "  For , we have if and only if .    Suppose . Since , we have either . Hence, and . In both cases, .  Now suppose . Then both and or and . If then . On the other hand, if , then . This concludes the proof.   "
},
{
  "id": "def-inclusion-integers-rationals",
  "level": "2",
  "url": "sec-construction-reals.html#def-inclusion-integers-rationals",
  "type": "Definition",
  "number": "42",
  "title": "",
  "body": "  Define the inclusion function by .   "
},
{
  "id": "prop-inclusion-integers-rationals",
  "level": "2",
  "url": "sec-construction-reals.html#prop-inclusion-integers-rationals",
  "type": "Proposition",
  "number": "43",
  "title": "",
  "body": "  The inclusion function of has the following properties.   The functionn is injective.    We have and .    If , then             We have if and only if .          For 1, we observe that if , so that , then by definition we have , so . Thus is injective.  For 2, we simply compute and similarly for .  The proof of 3 is left to the reader.   "
},
{
  "id": "def-division-rationals",
  "level": "2",
  "url": "sec-construction-reals.html#def-division-rationals",
  "type": "Definition",
  "number": "44",
  "title": "",
  "body": "  Define division by . We extend the mapping to all of by defining for all .   "
},
{
  "id": "prop-division-well-defined",
  "level": "2",
  "url": "sec-construction-reals.html#prop-division-well-defined",
  "type": "Proposition",
  "number": "45",
  "title": "",
  "body": "  Division is well-defined.    Left to the reader.   "
},
{
  "id": "def-absolute-value",
  "level": "2",
  "url": "sec-construction-reals.html#def-absolute-value",
  "type": "Definition",
  "number": "46",
  "title": "",
  "body": "  For any , define its absolute value  by .   "
},
{
  "id": "prop-absolute-value-properties",
  "level": "2",
  "url": "sec-construction-reals.html#prop-absolute-value-properties",
  "type": "Proposition",
  "number": "47",
  "title": "",
  "body": "  Let .   We have , with if and only if .     .    When , we have .    (The triangle inequality) .    (The reverse triangle inequality) .       Proof of 4: We have and , so . On the other hand, we also have , so that . Therefore , and the result follows from 3.   "
},
{
  "id": "prop-archimedean-property",
  "level": "2",
  "url": "sec-construction-reals.html#prop-archimedean-property",
  "type": "Proposition",
  "number": "48",
  "title": "The archimedean property of the real numbers.",
  "body": " The archimedean property of the real numbers   For all , there exists such that .    Left to the reader.   "
},
{
  "id": "def-sequence-rationals",
  "level": "2",
  "url": "sec-construction-reals.html#def-sequence-rationals",
  "type": "Definition",
  "number": "49",
  "title": "",
  "body": "  A sequence of rational numbers is a function . We write instead of .   "
},
{
  "id": "subsec-real-numbers-6",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-real-numbers-6",
  "type": "Example",
  "number": "50",
  "title": "",
  "body": "      is a sequence with values .    Define a sequence by . We will see later that this sequence (among many others) converges to , so we will eventually need a bigger number system.      "
},
{
  "id": "def-cauchy-sequence",
  "level": "2",
  "url": "sec-construction-reals.html#def-cauchy-sequence",
  "type": "Definition",
  "number": "51",
  "title": "",
  "body": "  Let be a sequence of rational numbers. We call a Cauchy sequence , for each rational , there exists such that for all .   "
},
{
  "id": "subsec-real-numbers-8",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-real-numbers-8",
  "type": "Example",
  "number": "52",
  "title": "",
  "body": "  The sequence with terms is not Cauchy, because we can choose and then for all there exist such that which is not less than .   "
},
{
  "id": "subsec-real-numbers-9",
  "level": "2",
  "url": "sec-construction-reals.html#subsec-real-numbers-9",
  "type": "Example",
  "number": "53",
  "title": "",
  "body": "  The sequence is Cauchy. Let be rational. Then choose . Then , so is a Cauchy sequence.   "
},
{
  "id": "def-equivalence-rel-cauchy-sequences",
  "level": "2",
  "url": "sec-construction-reals.html#def-equivalence-rel-cauchy-sequences",
  "type": "Definition",
  "number": "54",
  "title": "",
  "body": "  Let be the set of all Cauchy sequences of rational numbers and define a relation on by if, for all rational , there is such that for all .   "
},
{
  "id": "prop-equivalence-rel-cauchy-sequences",
  "level": "2",
  "url": "sec-construction-reals.html#prop-equivalence-rel-cauchy-sequences",
  "type": "Proposition",
  "number": "55",
  "title": "",
  "body": "  The relation is an equivalence relation.    Let and let . Since for all , we see that . Next suppose , so that there exists such that . Then , so .  Finally, suppose that and . Then there are , such that . Therefore, for all , we have . So, , as required.   "
},
{
  "id": "def-real-numbers",
  "level": "2",
  "url": "sec-construction-reals.html#def-real-numbers",
  "type": "Definition",
  "number": "56",
  "title": "",
  "body": "  The set of real numbers , denoted , is the set of equivalence classes of in , where is the relation of .   "
},
{
  "id": "prop-constant-sequence-cauchy",
  "level": "2",
  "url": "sec-construction-reals.html#prop-constant-sequence-cauchy",
  "type": "Proposition",
  "number": "57",
  "title": "",
  "body": "  A sequence all of whose terms are equal is Cauchy.   "
},
{
  "id": "prop-inclusion-rationals-into-reals",
  "level": "2",
  "url": "sec-construction-reals.html#prop-inclusion-rationals-into-reals",
  "type": "Proposition",
  "number": "58",
  "title": "",
  "body": "  There is an injective function defined by where denotes the constant sequence with value .    Suppose for some . Then by definition we have . This means that for all , we have . This implies , for if not, then , in which case , a contradiction.   "
},
{
  "id": "def-addition-multiplication-sequences",
  "level": "2",
  "url": "sec-construction-reals.html#def-addition-multiplication-sequences",
  "type": "Definition",
  "number": "59",
  "title": "",
  "body": "  Let and be sequences of rational numbers. Then the sum of and is the sequence whose terms are , and the product of and is the sequence whose terms are .   "
},
{
  "id": "prop-sums-products-of-Cauchy-are-Cauchy",
  "level": "2",
  "url": "sec-construction-reals.html#prop-sums-products-of-Cauchy-are-Cauchy",
  "type": "Proposition",
  "number": "60",
  "title": "",
  "body": "  If , then so are and .    Left to the reader.   "
},
{
  "id": "def-addition-multiplication-real-numbers",
  "level": "2",
  "url": "sec-construction-reals.html#def-addition-multiplication-real-numbers",
  "type": "Definition",
  "number": "61",
  "title": "",
  "body": "  Let , so and for some . We define .   "
},
{
  "id": "prop-real-ops-well-defined",
  "level": "2",
  "url": "sec-construction-reals.html#prop-real-ops-well-defined",
  "type": "Proposition",
  "number": "62",
  "title": "",
  "body": "  Suppose . Then for every , there exist such that . Then for all we have , so .   "
},
{
  "id": "lem-nonzero-real-represented-nonzero-sequence",
  "level": "2",
  "url": "sec-construction-reals.html#lem-nonzero-real-represented-nonzero-sequence",
  "type": "Lemma",
  "number": "63",
  "title": "",
  "body": "  If and , then there is a Cauchy sequence representing , a rational number , and such that for all .    Since , there exists such that for all , there is with .  At the same time, because is Cauchy, there is with for all . In particular, there is such that and for all with .   "
},
{
  "id": "prop-real-inverses-exist",
  "level": "2",
  "url": "sec-construction-reals.html#prop-real-inverses-exist",
  "type": "Proposition",
  "number": "64",
  "title": "",
  "body": "  If is a real number, there is a real number such that .    Let's write and use to get and such that for all . Now define a sequence by for all and for . Now let . Since is Cauchy, there exists such that . Now, suppose that . Then , whence and , so .  Next, for , we have and for , . Now we will prove that the sequence whose terms are is equivalent to . Indeed, let . Then for all , we have .  This shows that where .   "
},
{
  "id": "def-inverse-notation",
  "level": "2",
  "url": "sec-construction-reals.html#def-inverse-notation",
  "type": "Definition",
  "number": "65",
  "title": "",
  "body": "  For , we write or for the unique satisfying .   "
},
{
  "id": "def-operations-reals",
  "level": "2",
  "url": "sec-construction-reals.html#def-operations-reals",
  "type": "Definition",
  "number": "66",
  "title": "",
  "body": "  We define the operation of division by for real numbers , where .  We also define negation by and subtraction by .   "
},
{
  "id": "def-positive-reals",
  "level": "2",
  "url": "sec-construction-reals.html#def-positive-reals",
  "type": "Definition",
  "number": "67",
  "title": "",
  "body": "  We say is positive and write if for some Cauchy sequence such that there exists rational and such that for all .  For , we write if .  We say is negative if for some Cauchy sequence such that there exists rational and such that for all .   "
},
{
  "id": "prop-trichotomy-reals",
  "level": "2",
  "url": "sec-construction-reals.html#prop-trichotomy-reals",
  "type": "Proposition",
  "number": "68",
  "title": "",
  "body": "     For every , exactly one of the following is true: , , or .    We have if and only if .    If then and .    If then .    Suppose that is a Cauchy sequence and for for some . Then .       To prove (a), , then and there exist and as in . Since is Cauchy, there are two possibilities. There is some such that either   for all , we have , or    for all , we have .   Indeed, if this isn't the case, then there exist such that and Then, in either case, , which contradicts being Cauchy. In case 1 we have and in case 2 we have .  To prove (e), we suppose that . Then there is a rational number and such that and for all , for some . Now, for , we then have so that , contradicting the assumption that . Therefore .   "
},
{
  "id": "sec-the-real-number-system",
  "level": "1",
  "url": "sec-the-real-number-system.html",
  "type": "Section",
  "number": "2",
  "title": "The real number system",
  "body": " The real number system   Properties of    Let be real numbers. Then there is a natural number such that .      For each there is a unique such that .    By , there exists such that . Therefore, the set is nonempty. We observe that, by the well-ordering principle ( ) this set has a smallest element. (Strictly speaking, the well-ordering principle doesn't apply to the set , but we can easily prove by contradiction that has a least element using the well-ordering principle.) Call this smallest element .  Now let . Then , because . We also have because if not, then , which means , which would contradict the minimality of . This shows that .  The proof of uniqueness is omitted.      For any real numbers , there is a rational number with .    Choose so that . This is possible by the Archimedean property of the real numbers ( ). Then By the corollary above ( ), there is an integer such that Dividing this inequality by gives Since , we have and hence Thus is a rational number such that .      Let . A real number is an upper bound for provided that for every , . If such an exists, we say that is bounded above .     Let . Then is an upper bound for , and in fact any real number is an upper bound for . Thus is bounded above.  However, is not an upper bound for since but .    The set is not bounded above. To see this, let be arbitrary. By the Archimedean property ( ), there is a natural number such that . Since , this shows that is not an upper bound for . Thus is not bounded above.     We say that a real number is the least upper bound of a set provided that is an upper bound for and that if is any upper bound for , then .      Suppose and are both least upper bounds for a set . Then , because is an upper bound for and is a least upper bound. On the other hand, because is an upper bound for and is a least upper bound. Thus .      Every nonempty set of real numbers that is bounded above has a least upper bound.      Let be a nonempty set that is bounded above. The unique least upper bound of is called the supremum of and is denoted by .      Suppose is an upper bound for a set . Then if and only if for every there is an such that .    Suppose and let . Then , so is not an upper bound for . Therefore, there is an such that .  Conversely, suppose that for every there is an such that . We need to show that is the least upper bound for . We already know that is an upper bound for , so we need only show that if is any upper bound for , then . So let be an upper bound for . If , then let . By hypothesis, there is an such that , or equivalently, . But this contradicts the fact that is an upper bound for . Thus , and hence .        The supremum of the interval is . If there is such that , namely .    The supremum of the interval is also . If , then there is such that , for example, .   Observe that . Hence we have , but .     There is a positive real number whose square is 2.    Let . Then is nonempty (since ) and bounded above (since is an upper bound for ). By the completeness property of the real numbers ( ), has a supremum; call it . We will show that .  First suppose that . Let and compute , because (since is an upper bound for ) and . Since , we can choose so small that . This shows that , and hence . But this contradicts the fact that and . Thus is impossible.  Now suppose . Let and compute , because (since is an upper bound for ), , and . Since , we can choose so small that . This shows that , and hence . But this contradicts the fact that and . Thus is impossible.  This shows that , as required.      Let . A real number is a lower bound for provided that for every , . If such an exists, we say that is bounded below .      Let . A real number is a greatest lower bound for provided that is a lower bound for and for every lower bound of , . If such an exists, we say that has a greatest lower bound .      Let be a nonempty set that is bounded below. Then has a unique greatest lower bound.    Left to the reader.      Let be a nonempty set that is bounded below. The unique greatest lower bound of is called the infimum of and is denoted by .      Let be a lower bound for a set . Then if and only if for every there is an such that .    Left to the reader.     Let . Then is a lower bound for , and in fact . To see this, let . Then there is such that , and since , we can write for some with . Thus and .     For , let be real numbers and set . Suppose that for each , so that . Then the set .    Let . We have and is bounded above by , since for all . By , has a supremum; call it . Now fix and consider . Since , we have . Also, since is an upper bound for , we have . Thus . Since was arbitrary, we have for all , and hence . This shows that , as required.     It is necessary that the intervals be closed in order for the conclusion of the theorem to hold. For example, let . Then the intervals are nested, but their intersection is empty: , by the archimedean property ( ).     Cardinality    Two sets and are said to be equinumerous if there exists a bijection (one-to-one and onto function) . In this case, we write to denote that the sets have the same cardinality.      A set is said to be finite if there exists a natural number such that is equinumerous to the set . In this case, we write .      A set is said to be infinite if it is not finite.     The set is infinite. Indeed, if it were finite, then there would be a natural number such that is equinumerous to . This would mean that there is a bijection . But if is such a function, then setting , we have but and . This contradicts the fact that is surjective. Thus is infinite.    Define a function by . Then implies , and hence , so is injective. Also, if , then and , so is surjective. Thus is a bijection, and hence . This shows that it is possible for a set to be equinumerous to a proper subset of itself.    Let be an infinite set and let be distinct elements of . Such elements exist by the definition of infinite set. Let us show that is equinumerous to the set .  First, we can choose such that are all distinct. (If we could not do this, then would be finite.) Now define by and . Then is a bijection, and hence .     A set is said to be countable if there exists a bijection . In this case, we write to denote that is equinumerous to the natural numbers.     Define by . Then is a bijection, and hence . Thus the set of integers is countable.     A set is said to be uncountable if it is infinite and there does not exist a bijection . In this case, we write to denote that is not equinumerous to the natural numbers.      and are countable.        If and is countable, then is countable or finite.    If and are countable, then is countable.    If and are countable, then is countable.    If is countable for each , then is countable.       Proof of (3). For each , let be a bijection. Choose and set . Now define by . Let us show that is injective. So suppose that for some . Then Using the unique factorization of positive integers into primes, we have and , and . But is injective. Thus and is injective.     "
},
{
  "id": "thm-archimedean-prop-reals",
  "level": "2",
  "url": "sec-the-real-number-system.html#thm-archimedean-prop-reals",
  "type": "Theorem",
  "number": "69",
  "title": "",
  "body": "  Let be real numbers. Then there is a natural number such that .   "
},
{
  "id": "cor-rats-between-nats",
  "level": "2",
  "url": "sec-the-real-number-system.html#cor-rats-between-nats",
  "type": "Corollary",
  "number": "70",
  "title": "",
  "body": "  For each there is a unique such that .    By , there exists such that . Therefore, the set is nonempty. We observe that, by the well-ordering principle ( ) this set has a smallest element. (Strictly speaking, the well-ordering principle doesn't apply to the set , but we can easily prove by contradiction that has a least element using the well-ordering principle.) Call this smallest element .  Now let . Then , because . We also have because if not, then , which means , which would contradict the minimality of . This shows that .  The proof of uniqueness is omitted.   "
},
{
  "id": "thm-rats-dense-reals",
  "level": "2",
  "url": "sec-the-real-number-system.html#thm-rats-dense-reals",
  "type": "Theorem",
  "number": "71",
  "title": "",
  "body": "  For any real numbers , there is a rational number with .    Choose so that . This is possible by the Archimedean property of the real numbers ( ). Then By the corollary above ( ), there is an integer such that Dividing this inequality by gives Since , we have and hence Thus is a rational number such that .   "
},
{
  "id": "def-upper-bound",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-upper-bound",
  "type": "Definition",
  "number": "72",
  "title": "",
  "body": "  Let . A real number is an upper bound for provided that for every , . If such an exists, we say that is bounded above .   "
},
{
  "id": "subsec-properties-of-reals-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-properties-of-reals-6",
  "type": "Example",
  "number": "73",
  "title": "",
  "body": " Let . Then is an upper bound for , and in fact any real number is an upper bound for . Thus is bounded above.  However, is not an upper bound for since but .  "
},
{
  "id": "subsec-properties-of-reals-7",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-properties-of-reals-7",
  "type": "Example",
  "number": "74",
  "title": "",
  "body": " The set is not bounded above. To see this, let be arbitrary. By the Archimedean property ( ), there is a natural number such that . Since , this shows that is not an upper bound for . Thus is not bounded above.  "
},
{
  "id": "def-least-upper-bound",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-least-upper-bound",
  "type": "Definition",
  "number": "75",
  "title": "",
  "body": "  We say that a real number is the least upper bound of a set provided that is an upper bound for and that if is any upper bound for , then .   "
},
{
  "id": "lem-least-upper-bound-unique",
  "level": "2",
  "url": "sec-the-real-number-system.html#lem-least-upper-bound-unique",
  "type": "Lemma",
  "number": "76",
  "title": "",
  "body": "  Suppose and are both least upper bounds for a set . Then , because is an upper bound for and is a least upper bound. On the other hand, because is an upper bound for and is a least upper bound. Thus .   "
},
{
  "id": "thm-reals-complete",
  "level": "2",
  "url": "sec-the-real-number-system.html#thm-reals-complete",
  "type": "Theorem",
  "number": "77",
  "title": "",
  "body": "  Every nonempty set of real numbers that is bounded above has a least upper bound.   "
},
{
  "id": "def-supremum",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-supremum",
  "type": "Definition",
  "number": "78",
  "title": "",
  "body": "  Let be a nonempty set that is bounded above. The unique least upper bound of is called the supremum of and is denoted by .   "
},
{
  "id": "prop-supremum-property",
  "level": "2",
  "url": "sec-the-real-number-system.html#prop-supremum-property",
  "type": "Proposition",
  "number": "79",
  "title": "",
  "body": "  Suppose is an upper bound for a set . Then if and only if for every there is an such that .    Suppose and let . Then , so is not an upper bound for . Therefore, there is an such that .  Conversely, suppose that for every there is an such that . We need to show that is the least upper bound for . We already know that is an upper bound for , so we need only show that if is any upper bound for , then . So let be an upper bound for . If , then let . By hypothesis, there is an such that , or equivalently, . But this contradicts the fact that is an upper bound for . Thus , and hence .   "
},
{
  "id": "subsec-properties-of-reals-13",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-properties-of-reals-13",
  "type": "Example",
  "number": "80",
  "title": "",
  "body": "    The supremum of the interval is . If there is such that , namely .    The supremum of the interval is also . If , then there is such that , for example, .   Observe that . Hence we have , but .  "
},
{
  "id": "prop-square-root-2-exists",
  "level": "2",
  "url": "sec-the-real-number-system.html#prop-square-root-2-exists",
  "type": "Proposition",
  "number": "81",
  "title": "",
  "body": "  There is a positive real number whose square is 2.    Let . Then is nonempty (since ) and bounded above (since is an upper bound for ). By the completeness property of the real numbers ( ), has a supremum; call it . We will show that .  First suppose that . Let and compute , because (since is an upper bound for ) and . Since , we can choose so small that . This shows that , and hence . But this contradicts the fact that and . Thus is impossible.  Now suppose . Let and compute , because (since is an upper bound for ), , and . Since , we can choose so small that . This shows that , and hence . But this contradicts the fact that and . Thus is impossible.  This shows that , as required.   "
},
{
  "id": "def-lower-bound",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-lower-bound",
  "type": "Definition",
  "number": "82",
  "title": "",
  "body": "  Let . A real number is a lower bound for provided that for every , . If such an exists, we say that is bounded below .   "
},
{
  "id": "def-greatest-lower-bound",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-greatest-lower-bound",
  "type": "Definition",
  "number": "83",
  "title": "",
  "body": "  Let . A real number is a greatest lower bound for provided that is a lower bound for and for every lower bound of , . If such an exists, we say that has a greatest lower bound .   "
},
{
  "id": "prop-greatest-lower-bound-unique",
  "level": "2",
  "url": "sec-the-real-number-system.html#prop-greatest-lower-bound-unique",
  "type": "Proposition",
  "number": "84",
  "title": "",
  "body": "  Let be a nonempty set that is bounded below. Then has a unique greatest lower bound.    Left to the reader.   "
},
{
  "id": "def-infimum",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-infimum",
  "type": "Definition",
  "number": "85",
  "title": "",
  "body": "  Let be a nonempty set that is bounded below. The unique greatest lower bound of is called the infimum of and is denoted by .   "
},
{
  "id": "prop-infimum-property",
  "level": "2",
  "url": "sec-the-real-number-system.html#prop-infimum-property",
  "type": "Proposition",
  "number": "86",
  "title": "",
  "body": "  Let be a lower bound for a set . Then if and only if for every there is an such that .    Left to the reader.   "
},
{
  "id": "subsec-properties-of-reals-20",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-properties-of-reals-20",
  "type": "Example",
  "number": "87",
  "title": "",
  "body": " Let . Then is a lower bound for , and in fact . To see this, let . Then there is such that , and since , we can write for some with . Thus and .  "
},
{
  "id": "thm-nested-interval-property",
  "level": "2",
  "url": "sec-the-real-number-system.html#thm-nested-interval-property",
  "type": "Theorem",
  "number": "88",
  "title": "",
  "body": "  For , let be real numbers and set . Suppose that for each , so that . Then the set .    Let . We have and is bounded above by , since for all . By , has a supremum; call it . Now fix and consider . Since , we have . Also, since is an upper bound for , we have . Thus . Since was arbitrary, we have for all , and hence . This shows that , as required.   "
},
{
  "id": "subsec-properties-of-reals-22",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-properties-of-reals-22",
  "type": "Example",
  "number": "89",
  "title": "",
  "body": " It is necessary that the intervals be closed in order for the conclusion of the theorem to hold. For example, let . Then the intervals are nested, but their intersection is empty: , by the archimedean property ( ).  "
},
{
  "id": "def-equinumerous",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-equinumerous",
  "type": "Definition",
  "number": "90",
  "title": "",
  "body": "  Two sets and are said to be equinumerous if there exists a bijection (one-to-one and onto function) . In this case, we write to denote that the sets have the same cardinality.   "
},
{
  "id": "def-finite-set",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-finite-set",
  "type": "Definition",
  "number": "91",
  "title": "",
  "body": "  A set is said to be finite if there exists a natural number such that is equinumerous to the set . In this case, we write .   "
},
{
  "id": "def-infinite-set",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-infinite-set",
  "type": "Definition",
  "number": "92",
  "title": "",
  "body": "  A set is said to be infinite if it is not finite.   "
},
{
  "id": "subsec-cardinality-5",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-cardinality-5",
  "type": "Example",
  "number": "93",
  "title": "",
  "body": " The set is infinite. Indeed, if it were finite, then there would be a natural number such that is equinumerous to . This would mean that there is a bijection . But if is such a function, then setting , we have but and . This contradicts the fact that is surjective. Thus is infinite.  "
},
{
  "id": "subsec-cardinality-6",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-cardinality-6",
  "type": "Example",
  "number": "94",
  "title": "",
  "body": " Define a function by . Then implies , and hence , so is injective. Also, if , then and , so is surjective. Thus is a bijection, and hence . This shows that it is possible for a set to be equinumerous to a proper subset of itself.  "
},
{
  "id": "subsec-cardinality-7",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-cardinality-7",
  "type": "Example",
  "number": "95",
  "title": "",
  "body": " Let be an infinite set and let be distinct elements of . Such elements exist by the definition of infinite set. Let us show that is equinumerous to the set .  First, we can choose such that are all distinct. (If we could not do this, then would be finite.) Now define by and . Then is a bijection, and hence .  "
},
{
  "id": "def-countable-set",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-countable-set",
  "type": "Definition",
  "number": "96",
  "title": "",
  "body": "  A set is said to be countable if there exists a bijection . In this case, we write to denote that is equinumerous to the natural numbers.   "
},
{
  "id": "subsec-cardinality-9",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-cardinality-9",
  "type": "Example",
  "number": "97",
  "title": "",
  "body": " Define by . Then is a bijection, and hence . Thus the set of integers is countable.  "
},
{
  "id": "def-uncountable-set",
  "level": "2",
  "url": "sec-the-real-number-system.html#def-uncountable-set",
  "type": "Definition",
  "number": "98",
  "title": "",
  "body": "  A set is said to be uncountable if it is infinite and there does not exist a bijection . In this case, we write to denote that is not equinumerous to the natural numbers.   "
},
{
  "id": "subsec-cardinality-11",
  "level": "2",
  "url": "sec-the-real-number-system.html#subsec-cardinality-11",
  "type": "Example",
  "number": "99",
  "title": "",
  "body": "  and are countable.  "
},
{
  "id": "thm-countable-properties",
  "level": "2",
  "url": "sec-the-real-number-system.html#thm-countable-properties",
  "type": "Theorem",
  "number": "100",
  "title": "",
  "body": "     If and is countable, then is countable or finite.    If and are countable, then is countable.    If and are countable, then is countable.    If is countable for each , then is countable.       Proof of (3). For each , let be a bijection. Choose and set . Now define by . Let us show that is injective. So suppose that for some . Then Using the unique factorization of positive integers into primes, we have and , and . But is injective. Thus and is injective.   "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Section",
  "number": "3",
  "title": "Homework assignments",
  "body": " Homework assignments   HW 01  Note: These statements should be proved using only the definitions and properties presented in the lecture notes.   Show that, for all , the following are true.   If , then .    If , then .    We have if and only if .          Prove that for all .    Use to prove that for all .       Prove the following identities hold for all . You may freely use any corresponding properties of .                     Show that multiplication in , defined by is well-defined.    For , show that if and only if .    For , show that if and only if .    For , prove the following.   If then or . Hint: Suppose and split into cases and . Use the results of previous problems.    If and , then .       For , we write if either or . Prove that is a partial order . That is, prove the following are true for all .        If and , then     If and , then    (For the last two parts you will probably want to divide into cases.)       HW 02  Note: These statements should be proved using only the definitions and properties presented in the lecture notes.     Show that the equivalence relation of is an equivalence relation.      Prove .    A rational number satisfies exactly one of , , or , so divide into cases based on these.      Prove that if , then there exists with . You may use any of the standard properties of the relation on .      Prove that for all .      Prove the result of .      Use the Triangle Inequality to prove the Reverse Triangle Inequality .      If and are Cauchy sequences of rational numbers, prove that the sequence is also Cauchy.       HW 03  Note: These statements should be proved using only the definitions and properties presented in the lecture notes, as well as the additional definitions below.  Consider a subset of . We say that is a lower bound for if for all . We say that is a greatest lower bound for if, for all lower bounds of , we have .  Greatest lower bounds are unique when they exist, and every nonempty subset of that has a lower bound has a greatest lower bound. You can assume all this without proof for the rest of the HW 03.  The greatest lower bound of a set (provided it exists) is also called the infimum of and written .     Let . Prove that if , then and .    Use the definition of a real number as an equivalence class of Cauchy sequences of rational numbers.      Let be a Cauchy sequence of rational numbers and let . Show that if for all , then .    Use a proof by contradiction. If , then there exists such that (why?).      Suppose are nonempty and that has an upper bound.   Show that has an upper bound.    Show that .         Suppose each have an upper bound.   Show has an upper bound.    Find a formula for . Prove your result.         Let be nonempty and suppose has an upper bound. Let and define the set by . Prove that .      Suppose that is nonempty. Show that if is a lower bound for , then if and only if for every real number , there is an such that .      Find the supremum and infimum of the set . Prove your results.         Let be the set of irrational numbers. Show that if and , then .    Use the previous part and the density of in to prove that is also dense in . That is, if for , prove that there exists such that .       Apply the density result to . You may assume .      "
},
{
  "id": "subsec-hw-02-3-1",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "  Show that the equivalence relation of is an equivalence relation.   "
},
{
  "id": "subsec-hw-02-3-2",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": "  Prove .    A rational number satisfies exactly one of , , or , so divide into cases based on these.   "
},
{
  "id": "subsec-hw-02-3-3",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": "  Prove that if , then there exists with . You may use any of the standard properties of the relation on .   "
},
{
  "id": "subsec-hw-02-3-4",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": "  Prove that for all .   "
},
{
  "id": "subsec-hw-02-3-5",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-5",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": "  Prove the result of .   "
},
{
  "id": "subsec-hw-02-3-6",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-6",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "",
  "body": "  Use the Triangle Inequality to prove the Reverse Triangle Inequality .   "
},
{
  "id": "subsec-hw-02-3-7",
  "level": "2",
  "url": "homework.html#subsec-hw-02-3-7",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "",
  "body": "  If and are Cauchy sequences of rational numbers, prove that the sequence is also Cauchy.   "
},
{
  "id": "exercises-hw-03-1",
  "level": "2",
  "url": "homework.html#exercises-hw-03-1",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "  Let . Prove that if , then and .    Use the definition of a real number as an equivalence class of Cauchy sequences of rational numbers.   "
},
{
  "id": "exercises-hw-03-2",
  "level": "2",
  "url": "homework.html#exercises-hw-03-2",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "  Let be a Cauchy sequence of rational numbers and let . Show that if for all , then .    Use a proof by contradiction. If , then there exists such that (why?).   "
},
{
  "id": "exercises-hw-03-3",
  "level": "2",
  "url": "homework.html#exercises-hw-03-3",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "",
  "body": "  Suppose are nonempty and that has an upper bound.   Show that has an upper bound.    Show that .      "
},
{
  "id": "exercises-hw-03-4",
  "level": "2",
  "url": "homework.html#exercises-hw-03-4",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "",
  "body": "  Suppose each have an upper bound.   Show has an upper bound.    Find a formula for . Prove your result.      "
},
{
  "id": "exercises-hw-03-5",
  "level": "2",
  "url": "homework.html#exercises-hw-03-5",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "",
  "body": "  Let be nonempty and suppose has an upper bound. Let and define the set by . Prove that .   "
},
{
  "id": "exercises-hw-03-6",
  "level": "2",
  "url": "homework.html#exercises-hw-03-6",
  "type": "Exercise",
  "number": "3.3.6",
  "title": "",
  "body": "  Suppose that is nonempty. Show that if is a lower bound for , then if and only if for every real number , there is an such that .   "
},
{
  "id": "exercises-hw-03-7",
  "level": "2",
  "url": "homework.html#exercises-hw-03-7",
  "type": "Exercise",
  "number": "3.3.7",
  "title": "",
  "body": "  Find the supremum and infimum of the set . Prove your results.   "
},
{
  "id": "exercises-hw-03-8",
  "level": "2",
  "url": "homework.html#exercises-hw-03-8",
  "type": "Exercise",
  "number": "3.3.8",
  "title": "",
  "body": "     Let be the set of irrational numbers. Show that if and , then .    Use the previous part and the density of in to prove that is also dense in . That is, if for , prove that there exists such that .       Apply the density result to . You may assume .   "
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
