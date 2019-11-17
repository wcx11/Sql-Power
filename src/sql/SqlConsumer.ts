import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { TSqlLexer } from './grammar/TSqlLexer';
import { TSqlParser } from './grammar/TSqlParser';
import { CaseChangingStream } from './grammar/CaseChangingStream';
import { CompileTSqlParserVisitor } from './CompileTSqlParserVisitor';
export const compile = (sql: string) => {
    const input = sql;
    console.log(sql);
    const chars = new ANTLRInputStream(input);
    const upper = new CaseChangingStream(chars, true);
    const lexer = new TSqlLexer(upper);
    const tokens = new CommonTokenStream(lexer);
    const parser = new TSqlParser(tokens);
    const tree = parser.sql_clause();
    console.log('tree', tree);
    const compileVisitor = new CompileTSqlParserVisitor();
    const m = tree.accept(compileVisitor);
    console.log('m', m);
};

class Visitor {
    visitChildren(ctx) {
      if (!ctx) {
        return;
      }
  
      if (ctx.children) {
        return ctx.children.map(child => {
          if (child.children && child.children.length != 0) {
            return child.accept(this);
          } else {
            return child.getText();
          }
        });
      }
    }
  }