---
path: "/src/content/adam-n-eve"
date: "2019-02-19"
title: Adam's Rule & Eve's Rule
---

![The temptation](./adam_n_eve.jpg)

## In the beginning God Created the Heavens and the Earth...

What does religion have to do with statistics? Actually, quite a lot.

But, this time around, the Biblical Names of the "Rule's" we will be covering are far removed from any religious aura. In reality, the terms originate from a famous UC Berkeley Professor's assumption that these statistical facts were so primal and well-known that they could be affiliated with the famous characters from the Genesis.

The reason why I will be using these names is simply due to their mnemonic utility.

## Adam's Rule

**Adam's Rule** gives us the following practical observation:

$$E[X] = E[E[X|Y]]$$  

(where $$X$$ and $$Y$$ are Random Variables)

On the outset, what I claimed would be of a useful nature seems unnecessarily complex. Did we not establish a simpler rule for computing the expected value of a random variable?

You are correct that our traditional definition of the expected value of a random variable is 'simpler', namely it is:

$$E[X] = \displaystyle\sum x P(X=x)$$

However, in many cases we might not have the probability distribution of $$X$$ available. In these cases **Adam's Rule** is kind enough to give us a lending hand.

Notice that in **Adam's Rule** we are decomposing the expected value of $$X$$ into the composition of two expected values, yet none of these require knowing the probability distribution of such $$X$$.

Specifically, the inner expected value is taken in terms of the *conditional probability* of $$X$$ and $$Y$$, and the outer one is then taken with respect to the marginal distribution of $$Y$$.

We can make this explicit in **Adam's Rule** to aid our understanding:

$$E[X] = E_Y[E_{X|Y=y}[X|Y]]$$

The Proof is fairly straightforward, so let's go through it in the continuous case (which is analogous to the discrete as per usual we would just have to replace the integrands for summations).

### Proof Adam's Rule

$$E[E[X|Y]]$$

$$=E[\displaystyle\int_{-\infty}^{+\infty}xf_{X|Y}(x,y)dx]$$

$$=\displaystyle\int_{-\infty}^{+\infty}[\displaystyle\int_{-\infty}^{+\infty}xf_{X|Y}(x,y)dx]f_y(y)dy$$

$$=\displaystyle\int_{-\infty}^{+\infty}\displaystyle\int_{-\infty}^{+\infty}xf_{X|Y}(x,y)f_y(y)dxdy$$

Recall that:

$$f_{X|Y}(X,Y) = \displaystyle\frac{f_{X,Y}(X,Y)}{f_y(Y)}$$

Then:

$$=\displaystyle\int_{-\infty}^{+\infty}\displaystyle\int_{-\infty}^{+\infty}xf_{X,Y}(x,y)dxdy$$

$$=E[X]$$

The main take-away is that, in cases where we are interested in computing the expected value of a random variable $$X$$, but we do not have its probability distribution available, all hope is not lost, we can use $$X$$'s relationship with another random variable $$Y$$ to calculate $$E[X]$$.

## Eve's Rule

Generates~similarly to **Adam's Rule**~a nifty way of computing the Variance of a Random Variable from knowledge of its conditional probability, rather than from the explicit form of its probability distribution.

More concretely:

$$Var[X]=E[Var[X|Y]]+Var[E[X|Y]]$$

(where $$X$$ and $$Y$$ are random variables)

Notice that the name of the rule originates from the fact that we are taking the expected value of the variance then the variance of the expected value, and if we take the first letter of each of these terms it spells out $$EVVE\approx EVE$$.

This is a very nice result that we add to our arsenal, and I am sure it will come in handy as we delve into a more Bayesian treatment of probability in the future.

Here's a nice proof of **Eve's Rule**.

### Proof Eve's Rule

Recall that the 'original' (sin) definition of the Variance of a Random Variable $$X$$ can be stated as the difference of the second moment and the first moment squared, like so:

$$Var[X] = E[X^2] - (E[X])^2$$

We can apply **Adam's Rule** in 'reverse' and obtain:

$$Var[X] = E[E[X^2|Y]] - (E[E[X|Y]])^2$$

Once again, from our 'traditional' definition of the variance we can rewrite our formulation in the following way:

$$Var[X] = E[Var[X|Y]+(E[X|Y])^2] - (E[E[X|Y]])^2$$

Using linearity of the expectations we can write:

$$Var[X] = E[Var[X|Y]]+E[(E[X|Y])^2] - (E[E[X|Y]])^2$$

The last two-terms look just like a complex version of our definition of the variance, so our final result is:

$$Var[X] = E[Var[X|Y]]+Var[E[X|Y]]$$
