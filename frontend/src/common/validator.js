import { emailRegex, urlRegex } from "./constants";
import { isRef } from "vue"; //проверяет, является ли значение объектом ref

//  Каждое поле — это объект, ключом которого является имя валидации,
// а свойством — объект с полями rule (правило валидации) и message (текст ошибки).

const rules = {
  required: {
    rule: (value) => {
      if (isRef(value)) return !!value.value.trim();
      return !!value?.trim();
    },
    message: "Поле обязательно для заполнения",
  },
  email: {
    rule: (value) => {
      if (isRef(value)) {
        value = value.value;
      }
      return !!value ? emailRegex.test(String(value).toLowerCase()) : true;
    },
    message: "Электронная почта имеет неверный формат",
  },
  url: {
    rule: (value) => {
      if (isRef(value)) {
        value = value.value;
      }
      return !!value ? urlRegex.test(value) : true;
    },
    message: "Ссылка имеет неверный формат",
  },
};

const validate = (value, appliedRules) => {
  let error = "";
  appliedRules.forEach((appliedRule) => {
    if (!rules[appliedRule]) {
      return;
    }
    const { rule, message } = rules[appliedRule];
    if (!rule(value)) {
      error = message;
    }
  });

  return error;
};

/**
 * Функция validateFields принимает два параметра:

fields — объект с полями для валидации, например { myText: 'abc', myEmail: 'email@example.com' }.
validations — объект с правилами валидаций. Например,
{
	myText: {
		error: '',
		rules: ['required']
	},
  	myEmail: {
		error: '',
		rules: ['required', 'email']
	}
}

  Копировать
  
  
  
В свойство error будет записана ошибка валидации. Свойство rules содержит правила валидации для конкретного поля.

Важно, чтобы ключи в объекте rules совпадали с ключами в объекте fields.
 */

export const validateFields = (fields, validations) => {
  let isValid = true;
  Object.keys(validations).forEach((key) => {
    validations[key].error = validate(fields[key], validations[key].rules);
    if (validations[key].error) {
      isValid = false;
    }
  });
  return isValid;
};

// Функция для очистки ошибок валидации
export const clearValidationErrors = (validations) => {
  if (!validations) {
    return;
  }

  Object.keys(validations).forEach((key) => {
    validations[key].error = "";
  });
};
