# Документація до проєкту `pdf-convert-app`

## Опис проєкту

`pdf-convert-app` — це веб-додаток на основі React, який дозволяє користувачам конвертувати текст у PDF-файли через зовнішній API та переглядати згенеровані PDF-документи. Проєкт використовує сучасний JavaScript (ES6+), бібліотеки React, Axios для запитів до API, та `@react-pdf-viewer` для відображення PDF.

## Структура проєкту
```
├── mocks/ # Моки для тестів
│ ├── fileMock.js # Мок для статичних файлів (зображення тощо)
│ └── styleMock.js # Мок для CSS-файлів у Jest
├── node_modules/ # Залежності проєкту
├── public/ # Статичні файли
├── src/ # Основний код додатку
│ ├── tests/ # Тести
│ │ ├── App.test.jsx # Тести для App.jsx
│ │ └── pdfService.test.jsx # Тести для pdfService.jsx
│ ├── components/ # React-компоненти
│ │ ├── Button.jsx # Компонент кнопки
│ │ ├── HistoryList.jsx # Компонент для відображення історії конвертацій
│ │ ├── PdfViewer.jsx # Компонент для відображення PDF
│ │ └── Textarea.jsx # Компонент текстового поля
│ ├── context/ # Контекст для стану
│ │ └── PdfContext.jsx # Контекст для управління PDF-даними
│ ├── services/ # Сервіси для роботи з API
│ │ └── pdfService.jsx # Логіка конвертації тексту в PDF
│ ├── App.jsx # Головний компонент додатку
│ ├── index.css # Глобальні стилі (включає Tailwind CSS)
│ └── main.jsx # Точка входу для React
├── .babelrc # Налаштування Babel для трансформації коду
├── .gitignore # Файли, які ігноруються Git
├── index.html # Головний HTML-файл для Vite
├── jest.config.mjs # Конфігурація Jest для тестування
├── jest.setup.js # Налаштування для Jest (наприклад, @testing-library/jest-dom)
├── package-lock.json # Фіксація версій залежностей
├── package.json # Конфігурація проєкту та залежності
├── README.md # Документація проєкту
└── vite.config.js # Конфігурація Vite
```
### Основні директорії та файли

- **`src/`**: Містить весь вихідний код додатку.
- **`src/__tests__/`**: Тести для компонентів і сервісів.
- **`src/components/`**: React-компоненти, такі як `Button.jsx`, `HistoryList.jsx`, `PdfViewer.jsx`, `Textarea.jsx`.
- **`src/context/`**: Контекст для управління глобальним станом (наприклад, URL PDF).
- **`src/services/`**: Сервіси для взаємодії з API.
- **`__mocks__/`**: Моки для тестів, зокрема для ігнорування CSS і статичних файлів у Jest.

## Основні модулі

### 1. **`App.jsx`**

- **Опис**: Головний компонент додатку, який об’єднує інтерфейс користувача, логіку введення тексту, конвертацію та відображення PDF.
- **Функціональність**:
  - Форма для введення тексту через `Textarea.jsx`.
  - Кнопка для запуску конвертації через `Button.jsx` і `convertTextToPdf`.
  - Відображення історії конвертацій через `HistoryList.jsx` та PDF через `PdfViewer.jsx`.
- **Залежності**: `PdfContext`, `Button`, `Textarea`, `HistoryList`, `PdfViewer`, `convertTextToPdf`.

### 2. **`src/components/Button.jsx`**

- **Опис**: Компонент кнопки для запуску конвертації.
- **Функціональність**:
  - Стилізована кнопка з Tailwind CSS.
  - Викликає функцію конвертації при натисканні.
- **Залежності**: Tailwind CSS.

### 3. **`src/components/HistoryList.jsx`**

- **Опис**: Компонент для відображення історії конвертацій.
- **Функціональність**:
  - Отримує історію з `PdfContext` і відображає список конвертацій.
- **Залежності**: `PdfContext`, Tailwind CSS.

### 4. **`src/components/PdfViewer.jsx`**

- **Опис**: Компонент для відображення PDF-файлів у браузері.
- **Функціональність**:
  - Використовує `@react-pdf-viewer/core` і `@react-pdf-viewer/default-layout` для рендерингу PDF.
  - Отримує `pdfUrl` із `PdfContext` і відображає відповідний файл.
- **Залежності**: `@react-pdf-viewer/core`, `@react-pdf-viewer/default-layout`, `pdfjs-dist`, `PdfContext`.

### 5. **`src/components/Textarea.jsx`**

- **Опис**: Компонент текстового поля для введення тексту.
- **Функціональність**:
  - Стилізоване текстове поле з Tailwind CSS.
  - Передає введений текст у `App.jsx` через пропси.
- **Залежності**: Tailwind CSS.

### 6. **`src/context/PdfContext.jsx`**

- **Опис**: Контекст для управління станом PDF-файлів та історії конвертацій.
- **Функціональність**:
  - Зберігає `pdfUrl` (URL згенерованого PDF) та історію конвертацій у `localStorage`.
  - Надає методи для додавання нових записів до історії (`addToHistory`).
- **Залежності**: React Context API.

### 7. **`src/services/pdfService.jsx`**

- **Опис**: Сервіс для конвертації тексту в PDF через зовнішній API.
- **Функціональність**:
  - Виконує POST-запит до API (`http://95.217.134.12:4010/create-pdf`) з текстом.
  - Повертає Blob URL через `URL.createObjectURL`.
  - Обробляє помилки з викиданням виключення.
- **Залежності**: `axios`.

### 8. **`src/__tests__/App.test.jsx`**

- **Опис**: Тести для `App.jsx`.
- **Функціональність**:
  - Перевіряє рендеринг компонента, конвертацію тексту та обробку помилок API.
- **Залежності**: `@testing-library/react`, Jest.

### 9. **`src/__tests__/pdfService.test.jsx`**

- **Опис**: Тести для `pdfService.jsx`.
- **Функціональність**:
  - Тестує успішну конвертацію тексту в PDF (очікує Blob URL).
  - Тестує обробку помилок API.
- **Залежності**: Jest, `axios` (замоковано).

### 10. **`__mocks__/styleMock.js`**

- **Опис**: Мок для CSS-файлів у Jest.
- **Функціональність**:
  - Дозволяє ігнорувати імпорт CSS у тестах.
- **Залежності**: Jest.

### 11. **`__mocks__/fileMock.js`**

- **Опис**: Мок для статичних файлів (зображень тощо) у Jest.
- **Функціональність**:
  - Дозволяє ігнорувати імпорт статичних файлів у тестах.
- **Залежності**: Jest.

## Залежності

- **React**: Бібліотека для створення UI.
- **React DOM**: Для рендерингу React у DOM.
- **Axios**: Для HTTP-запитів до API.
- **`@react-pdf-viewer/core`**: Для відображення PDF.
- **`@react-pdf-viewer/default-layout`**: Для стандартного макета PDF-Viewer.
- **`pdfjs-dist`**: Worker для `@react-pdf-viewer`.
- **Tailwind CSS**: Для стилізації.
- **Vite**: Інструмент для розробки та збірки.
- **Jest**: Для тестування.
- **Babel**: Для трансформації коду.
- **`@testing-library/react`**: Для тестування React-компонентів.
- **`@testing-library/jest-dom`**: Для додаткових матчерів у тестах.

## Налаштування

- **`package.json`**: Містить залежності, скрипти (`npm run dev`, `npm run test`) та конфігурацію Jest.
- **`.babelrc`**:
  ```json
  {
    "presets": ["@babel/preset-env", "@babel/preset-react"]
  }
  ```

### Запуск проєкту

# npm install

# npm start

# npm run test
