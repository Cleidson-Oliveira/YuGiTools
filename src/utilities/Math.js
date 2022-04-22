export const Fatorial = (num) => {
    let numfat = num;

    for (let i = num - 1; i > 1; i--) {
      numfat *= i;
    }

    if (numfat <= 0) {
        numfat = 1;
    }

    return numfat;
}

export const Combination = (objects, repeticion) => {
    return (Fatorial(objects))/(Fatorial(repeticion)*Fatorial(objects - repeticion));
}

export const Combinatorics = {
    Permutation : Fatorial,
    Combination
}

export const HypergeometricDistribution = (N, n, K, k) => {
    let event = (Fatorial(K)/(Fatorial(k)*Fatorial(K-k)))*(Fatorial(N-K)/(Fatorial(n-k)*Fatorial((N-K)-(n-k))))
    let amostral = Fatorial(N)/(Fatorial(n)*Fatorial(N-n))
    return (event/amostral)*100
}