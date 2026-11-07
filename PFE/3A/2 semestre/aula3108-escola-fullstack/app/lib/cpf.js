import { createCipheriv, createDecipheriv, randomBytes } from "node:crypto";

function obterChave() {
    const chaveBase64 = process.env.CPF_ENCRYPTION_KEY;

    if (!chaveBase64) {
        throw new Error("Configure CPF_ENCRYPTION_KEY para criptografar CPFs.");
    }

    const chave = Buffer.from(chaveBase64, "base64");
    if (
        chave.length !== 32 ||
        chave.toString("base64").replace(/=+$/, "") !== chaveBase64.replace(/=+$/, "")
    ) {
        throw new Error("CPF_ENCRYPTION_KEY deve ser uma chave Base64 de 32 bytes.");
    }

    return chave;
}

export function normalizarCpf(valor) {
    return typeof valor === "string" ? valor.replace(/\D/g, "") : "";
}

export function validarCpf(valor) {
    if (typeof valor !== "string" || !/^[\d.\-\s]+$/.test(valor)) {
        return false;
    }

    const cpf = normalizarCpf(valor);
    if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    const calcularDigito = (base, pesoInicial) => {
        const soma = [...base].reduce(
            (total, digito, indice) => total + Number(digito) * (pesoInicial - indice),
            0
        );
        const resto = (soma * 10) % 11;
        return String(resto === 10 ? 0 : resto);
    };

    return cpf[9] === calcularDigito(cpf.slice(0, 9), 10)
        && cpf[10] === calcularDigito(cpf.slice(0, 10), 11);
}

export function criptografarCpf(cpf) {
    const iv = randomBytes(12);
    const cipher = createCipheriv("aes-256-gcm", obterChave(), iv);
    const cifrado = Buffer.concat([
        cipher.update(normalizarCpf(cpf), "utf8"),
        cipher.final(),
    ]);
    const tag = cipher.getAuthTag();

    return `${iv.toString("base64")}:${tag.toString("base64")}:${cifrado.toString("base64")}`;
}

export function descriptografarCpf(valor) {
    if (!valor) return "";

    const [ivBase64, tagBase64, cifradoBase64] = valor.split(":");
    if (!ivBase64 || !tagBase64 || !cifradoBase64) {
        throw new Error("O CPF armazenado não está em um formato criptografado válido.");
    }

    const decipher = createDecipheriv(
        "aes-256-gcm",
        obterChave(),
        Buffer.from(ivBase64, "base64")
    );
    decipher.setAuthTag(Buffer.from(tagBase64, "base64"));

    return Buffer.concat([
        decipher.update(Buffer.from(cifradoBase64, "base64")),
        decipher.final(),
    ]).toString("utf8");
}

export function mascararCpf(cpf) {
    const digitos = normalizarCpf(cpf);
    return digitos ? `***.***.***-${digitos.slice(-2)}` : "";
}
