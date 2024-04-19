[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ZLHpg3lN)
# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Since I am choosing the pivot by just choosing the right most element a worst case scenerio would be an input of an already sorted list. In this scenerio the pivot function would not split the list instead it would end up adding n number of sublists. Since the biggest number is the pivot each time, the comparison fucntion would have to go through the complete list each time. 

Therefore the fist round would be n comparisons, the secound round (n-1), third (n-3) and so on n times till we have 1 comparison. This is just the summation from 1 to n, which is equivalent to $\frac{n(n+1)}{2}$ = $\frac{n^2 + n}{2}$ = $n^2*\frac{1}{2} + n*\frac{1}{2}$ 

Asymptotically this is equal to the implementation having a bound $\Theta$ ($n^2$)