---
path: "/src/content/mgf"
date: "2019-02-18"
title: Moment Generating Functions
---

# Moment Generating Functions

Before defining what a Moment Generating Function is, I believe it is important to recall, as is traditionally done by researchers, the origin of the term itself. However, I do not mean it in the orthodox sense of tracing the etymology of the whole phrase. Rather, I mean it in the more banal sense of actually discussing the components that make up the term. In other words, we should remember what a 'Moment'$$^1$$ is in the field of Statistics.

## Moments

A Moment can be simply defined as the Expected Value of a Random Variable $$X$$ raised to some power $$k$$ where $$k$$ can be any non-negative integer.

For example, the following is a sequence of Moments:

$$E[X], E[X^2], E[X^3], ...$$

You might notice that some particular Moments are related to some important functions in Statistics!

For example recall that the mean of a Random Variable $$X$$ denoted $$\mu_X$$ is defined using the first-Moment of $$X$$:

$$\mu_X = E[X]$$

You might have also noticed that both the first and second Moments contribute to our definition of the variance of a random variable $$X$$ denoted as $$\sigma^2$$. More explicitly:

$$\sigma^2 = E[X^2] - (E[X])^2$$

These are only a few, of a handful, of examples where Moments certainly come in handy.

Now that we have recalled what a Moment is, we can proceed to describe what a Moment Generating Function does. Hint: the name is quite revealing!

In case you are still wondering, a Moment Generating Function helps us to easily derive the Moments of a Random Variable and by extension uncover some of its properties such as the mean and the variance. However, the usefulness of Moment Generating Functions (abbreviated MGF) does not end there.

## Finding Moment Generating Functions

The general formulation for finding Moment Generating Functions is quite simple:

$$m_X(t) = E[e^{tX}]$$

In the 'Discrete Case' (that is for Discrete Random Variables) we can expand the formulation to the following:

$$m_X(t) = E[e^{tX}] = \displaystyle\sum_{x\in X(S)}{e^{tx}\ f_X(x)}$$

That's it! That's the moment generating function of a Discrete Random Variable $$X$$. The only (albeit sometimes limiting) condition is that the summation must be finite for some interval of $$t$$ around $$0$$! In other words, we must be able to actually compute our summation.

In the 'Continuous Case', as you might have guessed, instead of the summation we take the integrand as follows:

$$m_X(t) = E[e^{tX}] = \displaystyle\int_{-\infty}^{+\infty}{e^{tx}\ f_X(x)\ dx}$$

Once again, our only limiting condition is that we must make sure that the integrand actually exists!

### Playing with our New Toy: Deriving Moments from MGFs

Now that we know how to compute the Moment Generating Function for any Random Variable, let's figure out how to make it live up to it's name.

To derive the $$k^{th}$$ Moment from our MGF we take the $$k{th}$$ derivative of our MGF evaluated at $$t=0$$.

For example, to compute the first Moment we would take the first-derivative of our MGF at $$t=0$$, like so:

$$m^{\prime}_X(0)=E[X]$$

For the second Moment:

$$m^{\prime\prime}_X(0)=E[X^2]$$

and so on, and so forth.

We can use these findings to give alternative formulations for computing the mean and variance:

$$\mu_X = E[X] = m^{\prime}_X(0)$$

$$\sigma^2 = E[X^2] - (E[X])^2 = m^{\prime\prime}_X(0) - (m^{\prime}_X(0))^2$$

Powerful yet surprisingly simple, is it not?

Best of all ~ as promised ~ the magic of Moment Generating Functions does not end here.

### Using MGFs to Find Distributions

This is where Moment Generating Functions truly shine.

It works like this: if two Random Variables have the same Moment Generating Function, then they have the same probability distributions!

The Proof is pretty simple, so I am going to include it in this case.

> **Proof:**
> Suppose we have a Random Variable $$X$$ with a Sample Space $$S = \{s_1, s_2, s_3, ...\}$$
>
> Then the Moment Generating Function is given by:
>
> $$m_X(t) = E[e^{tX}] = \displaystyle\sum_{x\in X(S)}{e^{tx}\ f_X(x)}$$
>
> We can expand this out into:
>
> $$m_X(t) = e^{ts_1}\ f_X(s_1) + e^{ts_2}\ f_X(s_2) + e^{ts_3}\ f_X(s_3) + ... $$
>
> Therefore, we can see that that the coefficient of $$e^{ts_i}$$ is:
>
> $$f_X(s_i)=P(X=s_i)$$
>
> Hence, our Moment Generating Function is uniquely determined by the probability distribution of our Random Variable $$X$$!

There you have it, a hopefully simple theoretical overview of Moment Generating Functions.

---
$$^1$$The technical term is Moment around the origin. This might illuminate the reasoning of why we evaluate the derivative of the MGF at $$t = 0$$ to compute the Moment (around the origin).
