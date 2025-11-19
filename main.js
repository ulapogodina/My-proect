
class NumberGenerator {
    // Класс для генерации случайных чисел
    
    constructor() {
        this.generatedNumbers = [];
    }
    
    //Генерирует случайные числа
  
    generateRandom(count = 5) {
        const numbers = Array.from({length: count}, 
            () => Math.floor(Math.random() * 100) + 1);
        this.generatedNumbers.push(...numbers);
        return numbers;
    }
    
    // Возвращает статистику по сгенерированным числам
   
    getStats() {
        if (this.generatedNumbers.length === 0) {
            return "Числа еще не сгенерированы";
        }
        
        const sum = this.generatedNumbers.reduce((a, b) => a + b, 0);
        
        return {
            total: this.generatedNumbers.length,
            sum: sum,
            average: sum / this.generatedNumbers.length,
            min: Math.min(...this.generatedNumbers),
            max: Math.max(...this.generatedNumbers)
        };
    }
}

//Основная функция
function main() {
    console.log("🚀 Запуск JavaScript проекта!");
    console.log(`📅 Текущая дата: ${new Date().toLocaleString()}`);
    
    // Создаем экземпляр генератора
    const generator = new NumberGenerator();
    
    // Генерируем числа
    const numbers = generator.generateRandom(4);
    console.log(`🔢 Сгенерированные числа: [${numbers.join(', ')}]`);
    
    // Показываем статистику
    const stats = generator.getStats();
    console.log("📊 Статистика:");
    for (const [key, value] of Object.entries(stats)) {
        console.log(`   ${key}: ${value}`);
    }
}

// Запускаем основную функцию
main();
