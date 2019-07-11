// JavaScript source code
//ex4-19 �Լ� ������ �ܺο��� ���� �Լ� ȣ���ϴ� �����ڵ�

/**
 * 1. ���� �Լ��� ǥ�������� �����ϰ� child �Լ� ������ �����Ѵ�.
 * �׸��� parent()�Լ��� ���ϰ����� ���� �Լ��� �������� ���� child�Լ������� �����Ѵ�.
 * 
 * 2. parent()�Լ��� ȣ��Ǹ� inner������ child �Լ� ���� ���� ���ϵȴ�.
 * child �Լ������� ���� �Լ��� �������� �����Ƿ�, inner������ child() ���� �Լ��� �����Ѵ�.
 * 
 * 3. inner������ �Լ� ȣ�� �����ڸ� �ٿ� �Լ� ȣ�� ������ �����, parent() �Լ� ������
 * �ۿ����� ���� �Լ� child()�� ȣ��ȴ�. ȣ���ϴ� �����Լ����� a ������ ���ǵǾ� �����ʾ�.
 * ������ ü�̴����� �θ� �Լ��� a������ ���ǵǾ� �ִ��� Ȯ���ϰ� �ǰ�, a�� ���ǵǾ� ������
 * �� ���� �� ��� ��µȴ�.
 * 
 * 4. �̿� ���� ������ ���� parent()�� ���� �θ� �Լ� �������� ������ �����ϴ� inner()��
 * ���� �Լ��� Ŭ������� �Ѵ�.
 * */

function parent() {
    var a = 100;

    //child() ���� �Լ�
    var child = function () {
        console.log(a);
    }
    //child() �Լ� ��ȯ
    return child;
}

var inner = parent();
inner();